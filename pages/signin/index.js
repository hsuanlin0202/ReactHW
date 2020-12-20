import React, { useState } from 'react';
import Link from 'next/link';
import login from '../../api/login';
import { Request } from '../../model/login';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Alert from '../../components/modal';
import store from '../../store';
import loginAction from '../../store/actions/login';
import Input from "../../components/input";
import { loginAcctValidate } from "../../functions/validation";



export default function SignIn() {
    const [values, setAccts] = React.useState({
        password: '',
        open: false,
        alertText: '',
        acct: '',
    });

    const [hasValidated, setValidated] = useState(false);

    const hasLogin = useSelector((state) => state.user);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!hasValidated) return;

        const req = Request(values.acct, values.password);
        const res = await login(req, values.acct);

        if (res.ReturnCode == 0) {
            store.dispatch(loginAction(res.ReturnData.AcctID));
            console.log(store.getState());
            router.push('/updateMember');
        } else {
            setAccts({ ...values, open: true, alertText: res.ReturnMessage });
        }
    };

    return (
        <div className='wid100 fx fx_center'>
            <Alert setFunc={setAccts} modalData={values} />
            <form className='signup wid80' onSubmit={handleSubmit}>
                <label className='wid100 fx fx_center mainTitle'>
                    {hasLogin ? JSON.stringify(hasLogin) : '會員登入'}
                </label>

                <Input
                    id="acct"
                    label="帳號"
                    placeholder="請輸入您的Email或手機號碼"
                    validate={loginAcctValidate}
                    error="Email或手機號碼格式錯誤，請重新輸入"
                    onChange={(acct) => setAccts((origin) => ({ ...origin, acct }))}
                    onError={(err) => setValidated(!err)}
                />

                <Input
                    id="password_confirm"
                    label="密碼"
                    placeholder="請輸入密碼"
                    validate={() => { }}
                    onChange={(password) => setAccts((origin) => ({ ...origin, password }))
                    }
                    type="password"
                />


                <div className='linkGroup fx fx_nowrap fx_end'>
                    沒有帳號？
                    <Link href='/signup'>
                        <a className='linkText'>加入會員</a>
                    </Link>
                </div>

                <div>
                    <button type='submit' className={hasValidated ? 'btn wid100 btn_00' : 'btn wid100 btn_disable'}>
                        確認送出
                    </button>
                    <Link href='/'>
                        <button className='btn wid100 btn_01'>上一頁</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
