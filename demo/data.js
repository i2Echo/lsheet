var sheetData ={
  "sheetId": "Sheet1",
  "sheetDisplayName": "测试表单",
  "hasActionBtn": true,
  "gridLayout": [
    [
      [2,4,2,4],
      [2,10],
      [2,4,2,4]
    ],
    [
      [2,4,2,4],
      [12]
    ]
  ],
  "blocks": [
    {
      "blockName": "基本信息",
      "isExpanded": true,
      "controls": [
        [
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_1"
            }
          },
          {
            "type": "SheetTextBox",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_2"
            }
          },
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "日期",
              "fieldId": "date",
              "value": "",
              "uid": "uid_11"
            }
          },
          {
            "type": "SheetTime",
            "fieldData":{
              "displayText": "日期",
              "fieldId": "date",
              "value": "",
              "uid": "uid_21"
            }
          }
        ],
        [
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "审批意见",
              "fieldId": "spyj",
              "value": "",
              "uid": "uid_3"
            }
          },
          {
            "type": "SheetTextarea",
            "fieldData":{
              "displayText": "审批意见",
              "fieldId": "spyj",
              "value": "",
              "uid": "uid_4"
            }
          }
        ],
        [
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "时间段",
              "fieldId": "timespan",
              "value": "",
              "uid": "uid_5"
            }
          },
          {
            "type": "SheetTimeSpan",
            "fieldData":{
              "displayText": "时间段",
              "fieldId": "timespan",
              "value": "",
              "uid": "uid_6"
            }
          },
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_7"
            }
          },
          {
            "type": "SheetTextBox",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_8"
            }
          }
        ]
      ]
    },
    {
      "blockName": "更多信息",
      "isExpanded": true,
      "controls": [
        [
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_9"
            }
          },
          {
            "type": "SheetTextBox",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_10"
            }
          },
          {
            "type": "SheetLabel",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_11"
            }
          },
          {
            "type": "SheetTextBox",
            "fieldData":{
              "displayText": "姓名",
              "fieldId": "name",
              "value": "",
              "uid": "uid_12"
            }
          }
        ],
        [
          {
            "type": "SheetRichTextBox",
            "fieldData":{
              "displayText": "编辑器",
              "fieldId": "editor",
              "value": "",
              "uid": "uid_13"
            }
          }
        ]
      ]
    }
  ]
}

var sheetFields = {
  "id": "57",
  "code": "CUST_LeaveProcess",
  "text": "请假流程",

  "children": [{
    "id": "150",
    "code": "ApplyName",
    
    "text": "申请人",
    "dataType": null,

    "children": null
  }, {
    "id": "151",
    "code": "ApplyDepartmentID",
    "parentId": "2",
    "text": "申请部门",
    "dataType": null,

    "children": null
  }, {
    "id": "152",
    "code": "ApplyDate",
    "parentId": "2",
    "text": "申请日期",
    "dataType": null,

    "children": null
  }, {
    "id": "153",
    "code": "Job",
    "parentId": "2",
    "text": "职务",
    "dataType": null,

    "children": null
  }, {
    "id": "154",
    "code": "EntryDate",
    "parentId": "2",
    "text": "入职日期",
    "dataType": null,

    "children": null
  }, {
    "id": "155",
    "code": "Account",
    "parentId": "2",
    "text": "事由",
    "dataType": null,

    "children": null
  }, {
    "id": "156",
    "code": "JobAgent",
    "parentId": "2",
    "text": "职务代理人",
    "dataType": null,

    "children": null
  }, {
    "id": "161",
    "code": "Total",
    "parentId": "2",
    "text": "总计",
    "dataType": null,

    "children": null
  }, {
    "id": "242",
    "code": "ShenPiYiJian",
    "parentId": "2",
    "text": "审批意见",
    "dataType": null,

    "children": null
  }]
}


