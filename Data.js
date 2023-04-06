

let Data={
    "display": "form",
    "components": [
        {
            "collapsible": false,
            "tableView": false,
            "key": "panel",
            "type": "panel",
            "label": "Panel",
            "input": false,
            "components": [
                {
                    "label": "Account Number",
                    "spellcheck": true,
                    "tableView": true,
                    "calculateServer": false,
                    "key": "Account.accountnumber",
                    "type": "textfield",
                    "keyModified": "Account.accountnumber",
                    "input": true
                },
                {
                    "collapsible": false,
                    "tableView": false,
                    "key": "panel1",
                    "type": "panel",
                    "label": "Panel",
                    "input": false,
                    "components": [
                        {
                            "label": "Asst. Phone",
                            "spellcheck": true,
                            "tableView": true,
                            "calculateServer": false,
                            "key": "Contact.assistantphone",
                            "type": "phoneNumber",
                            "keyModified": "Contact.assistantphone",
                            "input": true
                        },
                        {
                            "label": "Columns",
                            "columns": [
                                {
                                    "components": [
                                        {
                                            "label": "Business Phone",
                                            "spellcheck": true,
                                            "tableView": true,
                                            "calculateServer": false,
                                            "key": "Contact.phone",
                                            "type": "phoneNumber",
                                            "keyModified": "Contact.phone",
                                            "input": true,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                },
                                {
                                    "components": [
                                        {
                                            "label": "Other Street",
                                            "autoExpand": false,
                                            "spellcheck": true,
                                            "tableView": true,
                                            "calculateServer": false,
                                            "key": "Contact.otherstreet",
                                            "type": "textarea",
                                            "row": "3",
                                            "keyModified": "Contact.otherstreet",
                                            "input": true,
                                            "hideOnChildrenHidden": false
                                        }
                                    ],
                                    "width": 6,
                                    "offset": 0,
                                    "push": 0,
                                    "pull": 0,
                                    "size": "md"
                                }
                            ],
                            "tableView": false,
                            "key": "columns1",
                            "type": "columns",
                            "input": false
                        },
                        {
                            "label": "Email",
                            "spellcheck": true,
                            "tableView": true,
                            "calculateServer": false,
                            "key": "Contact.email",
                            "type": "textfield",
                            "keyModified": "Contact.email",
                            "input": true
                        }
                    ]
                },
                {
                    "label": "Billing City",
                    "spellcheck": true,
                    "tableView": true,
                    "calculateServer": false,
                    "key": "Account.billingcity",
                    "type": "textfield",
                    "keyModified": "Account.billingcity",
                    "input": true
                }
            ]
        },
        {
            "label": "Table",
            "cellAlignment": "left",
            "tableView": false,
            "key": "table",
            "type": "table",
            "input": false,
            "rows": [
                [
                    {
                        "components": [
                            {
                                "label": "Business Phone",
                                "spellcheck": true,
                                "tableView": true,
                                "calculateServer": false,
                                "key": "Contact.phone1",
                                "type": "phoneNumber",
                                "keyModified": "Contact.phone",
                                "input": true
                            }
                        ]
                    },
                    {
                        "components": []
                    },
                    {
                        "components": [
                            {
                                "label": "Title",
                                "spellcheck": true,
                                "tableView": true,
                                "calculateServer": false,
                                "key": "Contact.title",
                                "type": "textfield",
                                "keyModified": "Contact.title",
                                "input": true
                            }
                        ]
                    }
                ],
                [
                    {
                        "components": []
                    },
                    {
                        "components": []
                    },
                    {
                        "components": []
                    }
                ],
                [
                    {
                        "components": []
                    },
                    {
                        "components": []
                    },
                    {
                        "components": []
                    }
                ]
            ]
        },
        {
            "label": "Columns",
            "columns": [
                {
                    "components": [
                        {
                            "label": "Company",
                            "spellcheck": true,
                            "tableView": true,
                            "calculateServer": false,
                            "key": "Lead.company",
                            "type": "textfield",
                            "keyModified": "Lead.company",
                            "input": true,
                            "hideOnChildrenHidden": false
                        },
                        {
                            "label": "Country",
                            "spellcheck": true,
                            "tableView": true,
                            "calculateServer": false,
                            "key": "Lead.country",
                            "type": "textfield",
                            "keyModified": "Lead.country",
                            "input": true,
                            "hideOnChildrenHidden": false
                        }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "md"
                },
                {
                    "components": [
                        {
                            "label": "Description",
                            "autoExpand": false,
                            "spellcheck": true,
                            "tableView": true,
                            "calculateServer": false,
                            "key": "Lead.description",
                            "type": "textarea",
                            "row": "3",
                            "keyModified": "Lead.description",
                            "input": true,
                            "hideOnChildrenHidden": false
                        }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "md"
                }
            ],
            "tableView": false,
            "key": "columns",
            "type": "columns",
            "input": false
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "input": true,
            "tableView": false
        }
    ]
};
console.log( lookup(Data, 'keyModified') );
function lookup(obj, k) {
    let values = []
      for (var key in obj) {
        var value = obj[key];
    
        if (k == key) {
         // values.push(value)
          values.push({key,value});
        }
    
        if (typeof value === "object" && !Array.isArray(value)) {
          var y = lookup(value, k);
          // values.push(y);
         values=  values.concat(y);
        }
        if (Array.isArray(value)) {
          // for..in doesn't work the way you want on arrays in some browsers
          //
          for (var i = 0; i < value.length; ++i) {
            var x = lookup(value[i], k);
            
            values=  values.concat(x);
          }
        }
      }
    
      return values;
    }

// function lookup(obj, k) {
//   for (var key in obj) {
//     var value = obj[key];

//     if (k == key) {
//       return [k, value];
//     }

//     if (typeof(value) === "object" && !Array.isArray(value)) {
//       var y = lookup(value, k);
//       if (y && y[0] == k) return y;
//     }
//     if (Array.isArray(value)) {
//       // for..in doesn't work the way you want on arrays in some browsers
//       //
//       for (var i = 0; i < value.length; ++i) {
//         var x = lookup(value[i], k);
//         if (x && x[0] == k) return x;
//       }
//     }
//   }

//   return null;
// }
