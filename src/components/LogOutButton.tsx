'use client';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import Cookies from 'js-cookie';

const LogOutButton = () => {

    const logout = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!res.ok) {
            console.error('Failed to log out');
            return;
        }

        // ❌ Remove the token manually (if it was set with js-cookie)
        Cookies.remove('token', {
            path: '/',
            sameSite: 'None',
            secure: true,
        });

        redirect('/');
    }

    return (
        <div onClick={() => logout()} rel="canonical" className={`w-full h-[60px] md:p-4 p-4 md:gap-4 gap-4 text-[14px] rounded-[12px] flex items-center cursor-pointer text-main-foreground`}>
            <Image src={'/icons/logout.svg'} width={20} height={20} alt={'logout'}/>
            <span>Logout</span>
        </div>
    )
}

export default LogOutButton