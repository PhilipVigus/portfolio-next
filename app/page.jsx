'use client';

import '../styles/main.css';
import { MainHeading } from '../components/main-heading';
import { Header } from '../components/header';

export default function Page() {
    return (
        <div className="h-full screen leading-9">
            <div className="h-screen flex flex-col items-center justify-center p-60">
                <div className="w-full h-full flex flex-col justify-center box-border bg-transparent z-50">
                    <Header />
                    <MainHeading title="Welcome to my portfolio!" />

                    <p>My name is Phil Vigus and I&apos;m a full-stack developer with a passion for building great
                        applications. I live in Sweden, and work for Allakando as a Senior Full-Stack
                        Developer.
                    </p>
                    <div className="interlaced"></div>
                    <div className="glare"></div>
                </div>
            </div>

        </div>
    );
}