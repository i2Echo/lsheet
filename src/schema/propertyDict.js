const SheetControls = {
  SheetAttachment: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "AllowBatchDownload",
          Description: "获取或设置是否允许批量下载",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "FileExtensions",
          Description: "获取或设置附件上传的文件名格式,示例:.jpg,.gif",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "MaxUploadSize",
          Description: "获取或设置限制文件上传的大小(MB)，默认为 10MB",
          DefaultValue: 10,
          ValueRange: null
      }]
  },
  SheetCheckbox: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultValue",
          Description: "获取或设置控件的默认值",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "Text",
          Description: "获取或设置控件的文本说明",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置选项值改变事件"
      }]
  },
  SheetCheckboxList: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultItems",
          Description: "获取或设置绑定的选项值，多个值以;隔开",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayRule",
          Description: "获取或设置控件的显示规则",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "MasterDataCategory",
          Description: "获取或设置绑定的数据字典类型名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "RepeatColumns",
          Description: "获取或设置要在控件中显示的列数",
          DefaultValue: "5",
          ValueRange: null
      }, {
          Name: "RepeatDirection",
          Description: "获取或设置组中单选按钮的显示方向",
          DefaultValue: "Horizontal",
          ValueRange: ["Horizontal", "Vertical"]
      }, {
          Name: "SelectedValue",
          Description: "获取或设置控件选中的值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "VaildationRule",
          Description: "获取或设置控件的验证规则，为True时必填!",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置选择和取消选择事件"
      }]
  },
  SheetComment: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultComment",
          Description: "获取或设置默认审批意见",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplaySign",
          Description: "获取或设置是否显示用户签名",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "DisplayHead",
          Description: "获取或设置是否显示用户头像",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "DisplayBorder",
          Description: "获取或设置历史意见是否显示边框",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "FrequentCommentVisible",
          Description: "获取或设置是否显示常用意见",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "FrequentSettingVisible",
          Description: "获取或设置是否显示设置为常用意见",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "LastestCommentOnly",
          Description: "获取或设置是否显示最后一条意见",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "NullCommentTitleVisible",
          Description: "获取或设置当意见为空时是否显示意见标题",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "OUNameVisible",
          Description: "获取或设置是否显示OU名称",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "ActivityNameVisible",
          Description: "获取或设置是否显示活动节点名称",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "DateNewLine",
          Description: "获取或设置签名和日期是否换行",
          DefaultValue: false,
          ValueRange: [true, false]
      }]
  },
  SheetDropDownList: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultItems",
          Description: "获取或设置绑定的默认值，多个值以&quot;;&quot;号隔开",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayEmptyItem",
          Description: "获取或设置是否默认显示空项",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "EmptyItemText",
          Description: "获取或设置空项显示文本",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayRule",
          Description: "获取或设置控件的显示规则。",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "MasterDataCategory",
          Description: "获取或设置绑定数据字典的类型",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "Queryable",
          Description: "获取或设置是否允许对项目进行搜索",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "SchemaCode",
          Description: "获取或设置绑定的业务对象名称",
          DefaultValue: "",
          ValueRange: null,
          Popup: "DropDownListSetting",
          Height: 450,
          Width: 540
      }, {
          Name: "QueryCode",
          Description: "获取或设置业务对象的查询编码",
          DefaultValue: "",
          ValueRange: null,
          Popup: "DropDownListSetting",
          Height: 450,
          Width: 540
      }, {
          Name: "Filter",
          Description: "获取或设置过滤条件，例如&quot;数据项:查询字段1,控件ID:查询字段2,固定值:查询字段3&quot;",
          DefaultValue: "",
          ValueRange: null,
          Popup: "DropDownListSetting",
          Height: 450,
          Width: 540
      }, {
          Name: "DataValueField",
          Description: "获取或设置数据源绑定时显示的值字段的名称",
          DefaultValue: "",
          ValueRange: null,
          Popup: "DropDownListSetting",
          Height: 450,
          Width: 540
      }, {
          Name: "DataTextField",
          Description: "获取或设置数据源绑定时显示的文本字段的名称",
          DefaultValue: "",
          ValueRange: null,
          Popup: "DropDownListSetting",
          Height: 450,
          Width: 540
      }, {
          Name: "SelectedValue",
          Description: "获取或设置下拉框选定的值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "TextDataField",
          Description: "获取或设置存储选中项文本值的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "VaildationRule",
          Description: "获取或设置控件的验证规则，为True时必填!",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "ViewInNewContainer",
          Description: "获取或设置在移动端是否显示到新窗口",
          DefaultValue: false,
          ValueRange: [true, false]
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置数据改变时执行脚本"
      }]
  },
  SheetGridView: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayAdd",
          Description: "获取或设置是否显示添加按钮",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "DisplayClear",
          Description: "获取或设置是否显示清除按钮",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "DisplayDelete",
          Description: "获取或设置是否显示删除按钮",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "DisplayExport",
          Description: "获取或设置是否显示导出按钮",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "DisplayImport",
          Description: "获取或设置是否显示导入按钮",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "DisplayInsertRow",
          Description: "获取或设置是否显示插入行按钮",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "DefaultRowCount",
          Description: "获取或设置显示默认行总数",
          DefaultValue: 1,
          ValueRange: null
      }, {
          Name: "DisplaySequenceNo",
          Description: "获取或设置是否显示序号行",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "DisplaySummary",
          Description: "获取或设置是否显示汇总行",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "VirtualPaging",
          Description: "获取或设置是否分页加载",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "AlternatingRowStyle",
          Description: "获取或设置奇数行样式,如：background-color:#ccc",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: [{
          Name: "OnPreAdd",
          Description: "获取或设置添加行之前的事件",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OnAdded",
          Description: "获取或设置添加行后的事件",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OnEditorSaving",
          Description: "获取或设置子表行的保存事件",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OnPreRemove",
          Description: "获取或设置删除行之前的事件",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OnRemoved",
          Description: "获取或设置删除行后的事件",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OnRendered",
          Description: "获取或设置控件初始化完成后事件",
          DefaultValue: "",
          ValueRange: null
      }]
  },
  SheetCountLabel: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "StatType",
          Description: "获取或设置控件统计的方式",
          DefaultValue: "SUM",
          ValueRange: ["NONE", "SUM", "AVG", "MAX", "MIN"]
      }, {
          Name: "FormatRule",
          Description: "获取或设置控件的格式化规则,如{0：C2}",
          DefaultValue: "",
          ValueRange: null
      }]
  },
  SheetHyperLink: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "NavigateUrl",
          Description: "获取或设置链接的URL",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "NavigateUrlDataField",
          Description: "获取或设置链接URL绑定的数据项值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "Text",
          Description: "获取或设置链接显示的文本",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "TextDataField",
          Description: "获取或设置显示链接文本的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: []
  },
  SheetInstancePrioritySelector: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultValue",
          Description: "获取或设置默认选定的值",
          DefaultValue: "Normal",
          ValueRange: ["High", "Normal", "Low"]
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置控件的点击事件"
      }]
  },
  SheetLabel: {
      BindTypeEnum: {
          OnlyVisiable: "onlyvisiable",
          OnlyData: "onlydata"
      },
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "BindType",
          Description: "获取或设置控件绑定的方式",
          DefaultValue: "OnlyVisiable",
          ValueRange: ["OnlyVisiable", "OnlyData"]
      }, {
          Name: "ComputationRule",
          Description: "获取或设置控件的计算规则",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayRule",
          Description: "获取或设置控件的显示规则",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: [{
          Name: "OnClick",
          Description: "设置控件的点击事件"
      }]
  },
  SheetRadioButtonList: {
      RepeatDirectionEnum: {
          OnlyVisiable: "horizontal",
          All: "vertical"
      },
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultItems",
          Description: "获取或设置控件的显示项",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultSelected",
          Description: "获取或设置是否默认选中状态",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "DisplayRule",
          Description: "获取或设置控件的显示规则。",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "MasterDataCategory",
          Description: "获取或设置绑定的数据字典类型名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "RepeatColumns",
          Description: "获取或设置要在每行显示的列数。",
          DefaultValue: 5,
          ValueRange: null
      }, {
          Name: "RepeatDirection",
          Description: "获取或设置组中单选按钮的显示方向。",
          DefaultValue: "Horizontal",
          ValueRange: ["Horizontal", "Vertical"]
      }, {
          Name: "SelectedValue",
          Description: "获取或设置控件选中的值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "VaildationRule",
          Description: "获取或设置控件的验证规则，为True时必填!",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置数据改变时执行脚本。"
      }]
  },
  SheetRichTextBox: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "AutoTrim",
          Description: "获取或设置是否自动去除前后空格",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "DefaultValue",
          Description: "获取或设置控件的默认值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayRule",
          Description: "获取或设置控件的显示规则",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "PlaceHolder",
          Description: "获取或设置控件的水印文本",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "RichTextBox",
          Description: "获取或设置是否使用富文本框进行展现",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "ToolTip",
          Description: "获取或设置显示的提示信息",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "VaildationRule",
          Description: "获取或设置控件的验证规则",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "PopupWindow",
          Description: "获取或设置是否支持开窗查询",
          DefaultValue: "None",
          ValueRange: ["None", "PopupWindow", "Dropdown"]
      }, {
          Name: "DisplayText",
          Description: "获取或设置开窗查询文本",
          DefaultValue: "选择",
          ValueRange: null
      }, {
          Name: "PopupHeight",
          Description: "获取或设置开窗查询高度",
          DefaultValue: "400px",
          ValueRange: null
      }, {
          Name: "PopupWidth",
          Description: "获取或设置开窗查询宽度",
          DefaultValue: "600px",
          ValueRange: null
      }, {
          Name: "SchemaCode",
          Description: "获取或设置文本框开窗查询绑定的业务对象编码",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "QueryCode",
          Description: "获取或设置文本框开窗查询绑定的查询编码",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "InputMappings",
          Description: "获取或设置开窗查询输入参数条件，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "OutputMappings",
          Description: "获取或设置开窗查询输出关系映射，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "ViewInNewContainer",
          Description: "获取或设置在移动端是否显示到新窗口",
          DefaultValue: false,
          ValueRange: [true, false]
      }],
      DesignEvents: []
  },
  SheetTextBox: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "ComputationRule",
          Description: "获取或设置控件的计算规则",
          DefaultValue: "",
          ValueRange: null,
          Popup: "ComputationRule",
          Height: 390,
          Width: 490
      }, {
          Name: "DefaultValue",
          Description: "获取或设置控件的默认值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DisplayRule",
          Description: "获取或设置控件的显示规则",
          DefaultValue: "",
          ValueRange: null,
          RichProperty: true
      }, {
          Name: "FormatRule",
          Description: "获取或设置控件的格式化规则,如{0：C2}",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "PlaceHolder",
          Description: "获取或设置控件的水印文本",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "ToolTip",
          Description: "获取或设置显示的提示信息",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "RegularExpression",
          Description: "获取或设置控件的正则表达式规则",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxRegular",
          Height: 450,
          Width: 540
      }, {
          Name: "RegularInvalidText",
          Description: "获取或设置验证失败时显示的文本",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "VaildationRule",
          Description: "获取或设置控件的验证表达式，为True时必填!",
          DefaultValue: "",
          ValueRange: null,
          RichProperty: true
      }, {
          Name: "PopupWindow",
          Description: "获取或设置是否支持开窗查询",
          DefaultValue: "None",
          ValueRange: ["None", "PopupWindow", "Dropdown"]
      }, {
          Name: "DisplayText",
          Description: "获取或设置开窗查询文本",
          DefaultValue: "选择",
          ValueRange: null
      }, {
          Name: "PopupHeight",
          Description: "获取或设置开窗查询高度",
          DefaultValue: "400px",
          ValueRange: null
      }, {
          Name: "PopupWidth",
          Description: "获取或设置开窗查询宽度",
          DefaultValue: "600px",
          ValueRange: null
      }, {
          Name: "SchemaCode",
          Description: "获取或设置文本框开窗查询绑定的业务对象编码",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "QueryCode",
          Description: "获取或设置文本框开窗查询绑定的查询编码",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "InputMappings",
          Description: "获取或设置开窗查询输入参数条件，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "OutputMappings",
          Description: "获取或设置开窗查询输出关系映射，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetTextBoxSetting",
          Height: 450,
          Width: 550
      }, {
          Name: "ViewInNewContainer",
          Description: "获取或设置在移动端是否显示到新窗口",
          DefaultValue: false,
          ValueRange: [true, false]
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置文本框值改变事件"
      }, {
          Name: "OnFocus",
          Description: "获取或设置文本框获取焦点时事件"
      }, {
          Name: "OnKeyDown",
          Description: "获取或设置键盘摁下事件"
      }, {
          Name: "OnKeyUp",
          Description: "获取或设置键盘回弹事件"
      }]
  },
  SheetTime: {
      TimeModeEnum: {
          "OnlyDate": "OnlyDate",
          "SimplifiedTime": "SimplifiedTime",
          "FullTime": "FullTime",
          "OnlyTime": "OnlyTime"
      },
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultValue",
          Description: "获取或设置当前控件的默认值",
          DefaultValue: "CurrentTime",
          ValueRange: null
      }, {
          Name: "TimeMode",
          Description: "获取或设置日期控件的显示模式",
          DefaultValue: "OnlyDate",
          ValueRange: ["OnlyDate", "FullTime", "SimplifiedTime", "OnlyTime"]
      }, {
          Name: "MinValue",
          Description: "获取或设置日期控件显示的最小值",
          DefaultValue: "2010-01-01 00:00:00",
          ValueRange: null
      }, {
          Name: "MaxValue",
          Description: "获取或设置日期控件显示的最大值",
          DefaultValue: "2050-12-31 23:59:59",
          ValueRange: null
      }, {
          Name: "WdatePickerJson",
          Description: "获取或设置日期控件的显示JSON字符串(参考WdatePicker控件)",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "ViewInNewContainer",
          Description: "获取或设置在移动端是否显示到新窗口",
          DefaultValue: false,
          ValueRange: [true, false]
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置日期选定值变更后事件"
      }]
  },
  SheetUser: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "DefaultValue",
          Description: "获取或设置选人控件绑定的默认值",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "PlaceHolder",
          Description: "获取或设置控件的水印文本",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "SegmentVisible",
          Description: "获取或设置是否选择【组织群】",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "OrgUnitVisible",
          Description: "获取或设置是否选择【组织单元】",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "GroupVisible",
          Description: "获取或设置是否选择【用户组】",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "PostVisible",
          Description: "获取或设置是否选择【岗位】",
          DefaultValue: false,
          ValueRange: [true, false]
      }, {
          Name: "UserVisible",
          Description: "获取或设置是否选择【用户】",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "RootUnit",
          Description: "获取或设置根节点显示的组织节点编码",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "Recursive",
          Description: "获取或设置是否递归显示所有子节点",
          DefaultValue: true,
          ValueRange: [true, false]
      }, {
          Name: "VisibleUnits",
          Description: "获取需要显示的组织单元编码",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "RoleName",
          Description: "获取或设置显示指定的组名称中的用户",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OrgJobCode",
          Description: "获取或设置显示指定的职务编码中的用户",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OrgPostCode",
          Description: "获取或设置显示指定的岗位编码中的用户",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "OrgCode",
          Description: "获取或设置只显示指定编码的组织编码，多个以,分隔",
          DefaultValue: "",
          ValueRange: null
      }, {
          Name: "MappingControls",
          Description: "获取控件和属性映射关系",
          DefaultValue: "",
          ValueRange: null,
          Popup: "SheetUserSetting",
          Height: 430,
          Width: 520
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置控件的选人变更事件"
      }]
  },
  SheetTimeSpan: {
      DesignProperties: [{
          Name: "DataField",
          Description: "获取或设置控件绑定的数据项名称",
          DefaultValue: "",
          ValueRange: null
      }],
      DesignEvents: [{
          Name: "OnChange",
          Description: "获取或设置日期选定值变更后事件"
      }]
  }
}

export default SheetControls