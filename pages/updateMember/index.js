import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import Link from "next/link";
import Alert from '../../components/modal';
import { useSelector } from 'react-redux';
import { Request } from '../../model/getMember';
import GetMember from '../../api/getMember';
import logoutAction from '../../store/actions/logout';
import { useRouter } from 'next/router';
import store from '../../store';

import {
    nameValidate,
    phoneValidate,
    emailValidate,
    idValidate,
} from "../../functions/validation";

export default function updateMember() {
    const [payload, setPayload] = useState({});

    const hasLogin = useSelector((state) => state.user);

    useEffect(() => {
        if (!hasLogin) {
            logout();
            return;
        }

        const fetchUsers = async () => {
            const req = Request(hasLogin);
            // console.log(req);
            const data = await GetMember(req);
            // console.log(data);
            init(data);
        };
        fetchUsers();
    }, []);

    function init(data) {
        setPayload({
            ...payload,
            name: data.Data.AcctName,
            id: data.Data.LoginID,
            birth: data.Data.Birth,
            phone: data.Data.MainCell,
            email: data.Data.Email,
        });
    }

    console.log(payload);

    const [hasValidated, setValidated] = useState(false);

    const [modal, setModal] = useState({ open: false });

    function onSubmit(event) {
        event.preventDefault();

        if (!hasValidated) {
            return;
        }

        console.log(payload);
    }

    const router = useRouter();

    function logout() {
        store.dispatch(logoutAction());
        router.push('/');
    };

    return (
        <div className="wid100 fx fx_center">
            <Alert setFunc={setModal} modalData={modal} />

            <form className="signup wid80" onSubmit={onSubmit}>
                <label className="wid100 fx fx_center mainTitle">修改會員資料</label>

                <Input
                    id="name"
                    label="姓名"
                    placeholder="請輸入姓名"
                    validate={nameValidate}
                    error="請輸入姓名"
                    onChange={(name) => setPayload((origin) => ({ ...origin, name }))}
                    onError={(err) => setValidated(!err)}
                    initData={payload.name}
                />

                <Input
                    id="id"
                    label="身分證字號"
                    placeholder="請輸入您的身分證字號"
                    validate={idValidate}
                    error="請輸入正確的行動電話。"
                    onChange={(id) => setPayload((origin) => ({ ...origin, id }))}
                    onError={(err) => setValidated(!err)}
                    initData={payload.id}
                />

                <Input
                    id="birthday"
                    label="出生年月日"
                    type="datepicker"
                    onChange={(birth) => setPayload((origin) => ({ ...origin, birth }))}
                    onError={(err) => setValidated(!err)}
                    initData={payload.birth}
                />

                <Input
                    id="phone"
                    label="行動電話"
                    placeholder="請輸入您的行動電話"
                    validate={phoneValidate}
                    error="請輸入正確的行動電話。"
                    onChange={(phone) => setPayload((origin) => ({ ...origin, phone }))}
                    onError={(err) => setValidated(!err)}
                    initData={payload.phone}
                />

                <Input
                    id="email"
                    label="Email"
                    placeholder="請輸入您的Email"
                    validate={emailValidate}
                    error="請輸入正確的Email，建議避免使用hotmail"
                    onChange={(email) => setPayload((origin) => ({ ...origin, email }))}
                    onError={(err) => setValidated(!err)}
                    initData={payload.email}
                />



                <div className='btnGroup fx fx_nowrap'>
                    <button type='submit' className='btn btn50 btn_00' >
                        確定修改
                    </button>
                </div>

                <div className='btnGroup fx fx_nowrap'>
                    <button onClick={logout} className='btn wid50 btn_01'>
                        登出
                    </button>

                    <div style={{ width: '5%' }}></div>
                    <Link href='/'>
                        <button className='btn wid50 btn_01'>回首頁</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
