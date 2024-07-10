import React, { useContext } from 'react'
import{ useState, useRef, useEffect } from "react";
import { Datacontext } from '../context/Datacontext';
import { Result } from './Result';
 
export const Timer = () => {
    const Ref = useRef(null);
    const{id,time,settime}=useContext(Datacontext)

    let quizetime=0
    let temp=id.time
    const temparr=temp.split(":")

     quizetime+=temparr[0]*3600+temparr[1]*60


    const [timer, setTimer] = useState("00:00:00");
    const[red,setred]=useState(false)
 
    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
            if(hours==0&&minutes==0){
                setred(true)
            }
        }
        else{
            settime(true)
        }
    };
 
    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };
 
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + quizetime);
        return deadline;
    };
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // };
 
    return (
    <div>
        {
           red?(
                <div className="flex justify-center items-center w-[100px] h-[50px] text-[25px] text-red-500 font-extrabold">
        {timer}
        </div>
            ):(
                <div className="flex justify-center items-center w-[100px] h-[50px] text-[25px] font-bold">
                {timer}
                </div>
            )
}
    </div>
    );
};
 
