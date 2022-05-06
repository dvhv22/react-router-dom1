import { useState, useEffect } from "react";

const Count = () => {

    const [count, setCount] = useState(0);

    const [OTP, setOTP] = useState('');
    const [status, setStatus] = useState(false);

    const isEmpty = OTP.length === 0;

    useEffect(() => {
        console.log('check run >>>');
        if (count === 0) {
            setStatus(false);
            setOTP('');
            return;
        }

        setTimeout(() => {
            if (status) {
                setCount(count - 1);
            }

        }, 1000);

    }, [count, status]);

    useEffect(() => {
        setTimeout(() => {
            if (count === 0 && status) {
                alert('time out!!!');
            }

        }, 1000);
    }, [count, status]);

    const handleOnclick = () => {
        let number = Math.floor(Math.random() * 1000000);
        if (!isEmpty) {
            return;
        }
        setOTP(number);
        setStatus(true);
        setCount(10);

    }

    return (
        <>
            <button onClick={() => handleOnclick()}>press to get a number</button>
            {!isEmpty ?
                <div>Your number is: {OTP}</div>
                :
                <div></div>
            }
            <div>{count}</div>
        </>

    )

}
export default Count;