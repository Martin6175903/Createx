import {FC} from "react";

const Logo:FC<{color: string}> = ({color}) => {
    return (
        <div>
            <a href="#" className="logo">
                <svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path
                            d="M0 11.1008C0 5.00078 3.3 1.30078 8.7 1.30078C12.8 1.30078 16.1 3.80078 16.7 7.50078C16.8 7.90078 16.5 8.20078 16.1 8.20078H13.5C13.2 8.20078 13 8.00078 12.9 7.70078C12.4 5.80078 10.8 4.60078 8.7 4.60078C5.8 4.60078 4 7.10078 4 11.1008C4 15.1008 5.8 17.6008 8.8 17.6008C10.9 17.6008 12.4 16.5008 13 14.7008C13.1 14.4008 13.3 14.2008 13.6 14.2008H16.2C16.6 14.2008 16.9 14.6008 16.8 14.9008C16.2 18.5008 13 20.9008 8.8 20.9008C3.3 20.9008 0 17.1008 0 11.1008Z"
                            fill={color}/>
                        <path
                            d="M24.2997 20.401H21.3997C21.0997 20.401 20.8997 20.201 20.8997 19.901V2.60104C20.8997 2.20104 21.2997 1.80104 21.6997 1.80104H28.6997C32.7997 1.80104 35.2997 4.10104 35.2997 7.70104C35.2997 9.80104 34.2997 11.701 32.5997 12.701C32.1997 12.901 32.0997 13.401 32.2997 13.701L35.3997 19.601C35.5997 19.901 35.2997 20.301 34.9997 20.301H31.6997C31.4997 20.301 31.2997 20.201 31.1997 20.001L28.2997 14.001C28.1997 13.701 27.8997 13.601 27.5997 13.601H25.2997C24.9997 13.601 24.7997 13.801 24.7997 14.101V20.001C24.8997 20.201 24.5997 20.401 24.2997 20.401ZM24.8997 10.201C24.8997 10.501 25.0997 10.701 25.3997 10.701H28.3997C30.3997 10.701 31.4997 9.60104 31.4997 7.80104C31.4997 6.00104 30.2997 4.90104 28.3997 4.90104H25.4997C25.1997 4.90104 24.9997 5.10104 24.9997 5.40104V10.201H24.8997Z"
                            fill={color}/>
                        <path
                            d="M51.4998 20.401H40.4998C40.0998 20.401 39.7998 20.101 39.7998 19.701V2.50104C39.7998 2.10104 40.0998 1.80104 40.4998 1.80104H51.4998C51.8998 1.80104 52.1998 2.10104 52.1998 2.50104V4.40104C52.1998 4.80104 51.8998 5.10104 51.4998 5.10104H44.1998C43.8998 5.10104 43.6998 5.30104 43.6998 5.60104V9.00104C43.6998 9.30104 43.8998 9.50104 44.1998 9.50104H50.9998C51.3998 9.50104 51.6998 9.80104 51.6998 10.201V11.901C51.6998 12.301 51.3998 12.601 50.9998 12.601H44.1998C43.8998 12.601 43.6998 12.801 43.6998 13.101V16.901C43.6998 17.201 43.8998 17.401 44.1998 17.401H51.4998C51.8998 17.401 52.1998 17.701 52.1998 18.101V20.001C52.1998 20.101 51.8998 20.401 51.4998 20.401Z"
                            fill={color}/>
                        <path
                            d="M66.9999 15.901H61.2999C60.9999 15.901 60.7999 16.101 60.6999 16.301L59.5999 20.001C59.4999 20.301 59.2999 20.401 58.9999 20.401H56.3999C55.9999 20.401 55.6999 20.001 55.7999 19.601L61.7999 2.20104C61.8999 2.00104 62.0999 1.80104 62.3999 1.80104H66.0999C66.3999 1.80104 66.5999 2.00104 66.6999 2.20104L72.6999 19.601C72.7999 20.001 72.4999 20.401 72.0999 20.401H69.1999C68.8999 20.401 68.6999 20.201 68.5999 20.001L67.4999 16.301C67.4999 16.101 67.1999 15.901 66.9999 15.901ZM62.0999 13.001H66.1999C66.3999 13.001 66.4999 12.801 66.4999 12.601L64.2999 5.60104H64.0999L61.8999 12.601C61.7999 12.801 61.8999 13.001 62.0999 13.001Z"
                            fill={color}/>
                        <path
                            d="M79.0001 19.7014V5.50143C79.0001 5.20143 78.8001 5.00143 78.5001 5.00143H74.1001C73.7001 5.00143 73.3001 4.70143 73.3001 4.20143V2.50143C73.3001 2.10143 73.6001 1.70143 74.1001 1.70143H87.7001C88.1001 1.70143 88.5001 2.00143 88.5001 2.50143V4.20143C88.5001 4.60143 88.2001 5.00143 87.7001 5.00143H83.3001C83.0001 5.00143 82.8001 5.20143 82.8001 5.50143V19.8014C82.8001 20.2014 82.5001 20.5014 82.1001 20.5014H79.6001C79.3001 20.4014 79.0001 20.1014 79.0001 19.7014Z"
                            fill={color}/>
                        <path
                            d="M103.8 20.401H92.7999C92.3999 20.401 92.0999 20.101 92.0999 19.701V2.50104C92.0999 2.10104 92.3999 1.80104 92.7999 1.80104H103.8C104.2 1.80104 104.5 2.10104 104.5 2.50104V4.40104C104.5 4.80104 104.2 5.10104 103.8 5.10104H96.4999C96.1999 5.10104 95.9999 5.30104 95.9999 5.60104V9.00104C95.9999 9.30104 96.1999 9.50104 96.4999 9.50104H103.3C103.7 9.50104 104 9.80104 104 10.201V11.901C104 12.301 103.7 12.601 103.3 12.601H96.4999C96.1999 12.601 95.9999 12.801 95.9999 13.101V16.901C95.9999 17.201 96.1999 17.401 96.4999 17.401H103.8C104.2 17.401 104.5 17.701 104.5 18.101V20.001C104.5 20.101 104.2 20.401 103.8 20.401Z"
                            fill={color}/>
                        <path
                            d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z"
                            fill="#FF3F3A"/>
                        <path
                            d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z"
                            fill="#FF3F3A"/>
                    </g>
                </svg>
            </a>
        </div>
    );
};

export default Logo;