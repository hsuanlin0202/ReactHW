/*

{
   "AcctId":"388848"
}


{
    "ReturnCode": 0,
    "ReturnDate": "2020-12-08 13:04:40",
    "Data":{
    "memberlabel": "國軍會員",
    "AcctID": 388848,
    "AcctCatID": 1,
    "LoginID": "O200253285",
    "AcctName": "Sherin",
    "Birth": "2020-12-08",
    "MainCell": "0963379159",
    "Email": "hsuanlin0202@gmail.com",
    },
    "Status": true,
    "Errors":[]
}
*/

export function Request(acctId) {
    return {
        AcctId: acctId,
    };
}

export function Response() {
    return {
        ReturnCode: 0,
        ReturnDate: '2020-12-08 13:04:40',
        Data: {
            memberlabel: '國軍會員',
            AcctID: 388848,
            AcctCatID: 1,
            LoginID: 'O200253285',
            AcctName: 'Sherin',
            Birth: '2020-12-08',
            MainCell: '0963379159',
            Email: 'hsuanlin0202@gmail.com',
        },
        Status: true,
        Errors: [],
    };
}
