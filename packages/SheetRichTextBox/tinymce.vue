<template>
  <div class="tinymce-container editor-container">
    <textarea class="tinymce-textarea" :id="tinymceId"></textarea>
  </div>
</template>

<script>
// Import Tinymce
import tinymce from 'tinymce/tinymce'
tinymce.baseURL = 'static/tinymce'
// Any plugins you want to use has to be imported
import plugins from './plugins'
import toolbar from './toolbar'
// A theme is also required
import 'tinymce/themes/modern/theme'

export default {
  name: 'tinymce',

  props: {
    id: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    menubar: {
      // default: 'file edit insert view format table help'
      default: false
    },
    height: {
      type: Number,
      required: false,
      default: 200
    }
  },
  data () {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id || 'vue-tinymce-' + +new Date()
    }
  },
  watch: {
    value (val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => tinymce.get(this.tinymceId).setContent(val))
      }
    }
  },
  mounted () {
    this.initTinymce()
  },
  activated () {
    this.initTinymce()
  },
  deactivated () {
    this.destroyTinymce()
  },
  methods: {
    initTinymce () {
      const _this = this
      tinymce.init({
        selector: `#${this.tinymceId}`,
        language: 'zh_CN',
        height: this.height,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        plugins: plugins,
        body_class: 'panel-body ',
        object_resizing: false,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['wpimg.wallstcn.com', 'wallstreetcn.com'],
        imagetools_toolbar: 'watermark',
        default_link_target: '_blank',
        link_title: false,
        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent({ format: 'raw' }))
          })
        }
      })
    },
    destroyTinymce () {
      if (tinymce.get(this.tinymceId)) {
        tinymce.get(this.tinymceId).destroy()
      }
    },
    setContent (value) {
      tinymce.get(this.tinymceId).setContent(value)
    },
    getContent () {
      tinymce.get(this.tinymceId).getContent()
    },
    imageSuccessCBK (arr) {
      const _this = this
      arr.forEach(v => {
        tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
      })
    }
  },
  destroyed () {
    this.destroyTinymce()
  }
}
</script>

<style scoped>
.tinymce-container {
  position: relative
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
</style>
