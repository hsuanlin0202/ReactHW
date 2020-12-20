/*

{
   "AcctId":"388848"
}


{
    "ReturnCode": 0,
    "ReturnDate": "2020-12-08 13:04:40",
    "Data":{
    "allowpromote": "Y",
    "gosmartlogin": "Y",
    "gosmartlogindate": "2020-09-26 09:44:32",
    "membertype": "VIP",
    "vipcode": "zU3ha6",
    "memberlabel": "國軍會員",
    "AcctID": 388848,
    "membercode": "zU3ha6",
    "AcctCatID": 1,
    "LoginID": "O200253285",
    "AcctName": "Sherin",
    "Birth": "2020-12-08",
    "MainTelAreaCode": "02",
    "MainTel": "25183060",
    "MainCell": "0963379159",
    "HHRCityID": 0,
    "HHRAreaID": 0,
    "HHRAddr": "信義區帝寶",
    "CityID": 1,
    "AreaID": 1,
    "Addr": "這是測試資料庫.",
    "Email": "hsuanlin0202@gmail.com",
    "EpaperSts": "Y",
    "SMSSts": "Y",
    "VerifyDate": "2020-09-26 09:44:32",
    "VerifyIp": "127.0.0.1",
    "LoginNum": 169,
    "LoginDate": "2020-12-08 13:03:05",
    "MemRegulationID": "0",
    "MemRegulationDate": "2020-11-09 11:35:44",
    "TimesOfVerify": "0",
    "DBSts": "D",
    "CreUser": "4",
    "CreDate": "2020-09-24 10:05:32",
    "CreIP": "127.0.0.1",
    "UpdUser": "4",
    "UpdDate": "2020-12-08 13:03:04",
    "UpdIP": "192.168.30.223",
    "JurisdictionNum": "123456789012",
    "AcctType": 0,
    "EmailConfirmed": "Y",
    "PhoneNumberConfirmed": "Y",
    "isNew": "Y",
    "srcSys": "4",
    "Enable": "Y",
    "isLogin": "Y",
    "RegisteredSource": 0,
    "memberVerifydatetime": "2020-10-16 15:00:46",
    "NationalCode": "886",
    "UpdENUser": "4",
    "UpdENDate": "2020-12-08T05:04:40.715+00:00"
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
            allowpromote: 'Y',
            gosmartlogin: 'Y',
            gosmartlogindate: '2020-09-26 09:44:32',
            membertype: 'VIP',
            vipcode: 'zU3ha6',
            memberlabel: '國軍會員',
            AcctID: 388848,
            membercode: 'zU3ha6',
            AcctCatID: 1,
            LoginID: 'O200253285',
            AcctName: 'Sherin',
            Birth: '1998-08-15',
            MainTelAreaCode: '02',
            MainTel: '25183060',
            MainCell: '0963379159',
            HHRCityID: 0,
            HHRAreaID: 0,
            HHRAddr: '信義區帝寶',
            CityID: 1,
            AreaID: 1,
            Addr: '這是測試資料庫.',
            Email: 'hsuanlin0202@gmail.com',
            EpaperSts: 'Y',
            SMSSts: 'Y',
            VerifyDate: '2020-09-26 09:44:32',
            VerifyIp: '127.0.0.1',
            LoginNum: 169,
            LoginDate: '2020-12-08 13:03:05',
            MemRegulationID: '0',
            MemRegulationDate: '2020-11-09 11:35:44',
            TimesOfVerify: '0',
            DBSts: 'D',
            CreUser: '4',
            CreDate: '2020-09-24 10:05:32',
            CreIP: '127.0.0.1',
            UpdUser: '4',
            UpdDate: '2020-12-08 13:03:04',
            UpdIP: '192.168.30.223',
            JurisdictionNum: '123456789012',
            AcctType: 0,
            EmailConfirmed: 'Y',
            PhoneNumberConfirmed: 'Y',
            isNew: 'Y',
            srcSys: '4',
            Enable: 'Y',
            isLogin: 'Y',
            RegisteredSource: 0,
            memberVerifydatetime: '2020-10-16 15:00:46',
            NationalCode: '886',
            UpdENUser: '4',
            UpdENDate: '2020-12-08T05:04:40.715+00:00',
        },
        Status: true,
        Errors: [],
    };
}
