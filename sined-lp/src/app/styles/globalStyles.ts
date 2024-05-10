import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    #root{
        margin:0 auto;
        
    }

    :root{
        --color-white:#ffffff;
        --color-white-2:#F0EFF4;
        --color-primary-darken:#121a0a;
        --color-primary-black:#293F14;
        --color-primary-dark:#fbc404;
        --color-primary:#3c06a4;
        --color-primary-strong: #31D843;
        --color-primary-light:#3EFF8B;
        --color-secondary:#f85b05;
        --color-black: #000000;
        --color-black-2: 	#101010;
        --color-gray: #5a5a5a;
        --color-gray-light: #c6c6c6;
        --gradient-white: radial-gradient(
            circle at 13% 47%,
            rgba(140, 140, 140, 0.03) 0%,
            rgba(140, 140, 140, 0.03) 25%,
            transparent 25%,
            transparent 100%
        ),
        radial-gradient(
            circle at 28% 63%,
            rgba(143, 143, 143, 0.03) 0%,
            rgba(143, 143, 143, 0.03) 16%,
            transparent 16%,
            transparent 100%
        ),
        radial-gradient(
            circle at 81% 56%,
            rgba(65, 65, 65, 0.03) 0%,
            rgba(65, 65, 65, 0.03) 12%,
            transparent 12%,
            transparent 100%
        ),
        radial-gradient(
            circle at 26% 48%,
            rgba(60, 60, 60, 0.03) 0%,
            rgba(60, 60, 60, 0.03) 6%,
            transparent 6%,
            transparent 100%
        ),
        radial-gradient(
            circle at 97% 17%,
            rgba(150, 150, 150, 0.03) 0%,
            rgba(150, 150, 150, 0.03) 56%,
            transparent 56%,
            transparent 100%
        ),
        radial-gradient(
            circle at 50% 100%,
            rgba(25, 25, 25, 0.03) 0%,
            rgba(25, 25, 25, 0.03) 36%,
            transparent 36%,
            transparent 100%
        ),
        radial-gradient(
            circle at 55% 52%,
            rgba(69, 69, 69, 0.03) 0%,
            rgba(69, 69, 69, 0.03) 6%,
            transparent 6%,
            transparent 100%
        ),
        linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
          --gradient-primary:radial-gradient(
            circle at 72% 83%,
            rgba(12, 12, 12, 0.04) 0%,
            rgba(12, 12, 12, 0.04) 50%,
            rgba(172, 172, 172, 0.04) 50%,
            rgba(172, 172, 172, 0.04) 100%
        ),
        radial-gradient(
            circle at 57% 65%,
            rgba(11, 11, 11, 0.04) 0%,
            rgba(11, 11, 11, 0.04) 50%,
            rgba(222, 222, 222, 0.04) 50%,
            rgba(222, 222, 222, 0.04) 100%
        ),
        radial-gradient(
            circle at 64% 31%,
            rgba(11, 11, 11, 0.04) 0%,
            rgba(11, 11, 11, 0.04) 50%,
            rgba(191, 191, 191, 0.04) 50%,
            rgba(191, 191, 191, 0.04) 100%
        ),
        linear-gradient(130deg, rgb(5, 235, 123), rgb(47, 52, 6));
        --gradient-primary-2:radial-gradient(
            circle at 85% 1%,
            hsla(190, 0%, 93%, 0.05) 0%,
            hsla(190, 0%, 93%, 0.05) 96%,
            transparent 96%,
            transparent 100%
        ),
        radial-gradient(
            circle at 14% 15%,
            hsla(190, 0%, 93%, 0.05) 0%,
            hsla(190, 0%, 93%, 0.05) 1%,
            transparent 1%,
            transparent 100%
        ),
        radial-gradient(
            circle at 60% 90%,
            hsla(190, 0%, 93%, 0.05) 0%,
            hsla(190, 0%, 93%, 0.05) 20%,
            transparent 20%,
            transparent 100%
        ),
        radial-gradient(
            circle at 79% 7%,
            hsla(190, 0%, 93%, 0.05) 0%,
            hsla(190, 0%, 93%, 0.05) 78%,
            transparent 78%,
            transparent 100%
        ),
        radial-gradient(
            circle at 55% 65%,
            hsla(190, 0%, 93%, 0.05) 0%,
            hsla(190, 0%, 93%, 0.05) 52%,
            transparent 52%,
            transparent 100%
        ),
        linear-gradient(135deg, rgb(56, 108, 11), rgb(56, 167, 0));

        --gradient-white-2: radial-gradient(circle at 57% 36%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 10%,transparent 10%, transparent 100%),radial-gradient(circle at 22% 61%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 68% 97%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 41%,transparent 41%, transparent 100%),radial-gradient(circle at 57% 89%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 30%,transparent 30%, transparent 100%),radial-gradient(circle at 39% 80%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 88% 71%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 30%,transparent 30%, transparent 100%),linear-gradient(0deg, rgb(255,255,255),rgb(255,255,255));
    }
    body{
        background:#F9FAFC;
    }

    @-moz-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@-o-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    -moz-transform: scale(0.1, 0.1);
    -o-transform: scale(0.1, 0.1);
    -ms-transform: scale(0.1, 0.1);
    transform: scale(0.1, 0.1);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  50% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
  }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -o-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
}
@-moz-keyframes bounce {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -webkit-transform: translateY(-2000px) rotate(-45deg);
    -moz-transform: translateY(-2000px) rotate(-45deg);
    -o-transform: translateY(-2000px) rotate(-45deg);
    -ms-transform: translateY(-2000px) rotate(-45deg);
    transform: translateY(-2000px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
    -webkit-transform: translateY(30px) rotate(-45deg);
    -moz-transform: translateY(30px) rotate(-45deg);
    -o-transform: translateY(30px) rotate(-45deg);
    -ms-transform: translateY(30px) rotate(-45deg);
    transform: translateY(30px) rotate(-45deg);
  }
  80% {
    -webkit-transform: translateY(-10px) rotate(-45deg);
    -moz-transform: translateY(-10px) rotate(-45deg);
    -o-transform: translateY(-10px) rotate(-45deg);
    -ms-transform: translateY(-10px) rotate(-45deg);
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    -webkit-transform: translateY(0) rotate(-45deg);
    -moz-transform: translateY(0) rotate(-45deg);
    -o-transform: translateY(0) rotate(-45deg);
    -ms-transform: translateY(0) rotate(-45deg);
    transform: translateY(0) rotate(-45deg);
  }
}
@-webkit-keyframes bounce {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -webkit-transform: translateY(-2000px) rotate(-45deg);
    -moz-transform: translateY(-2000px) rotate(-45deg);
    -o-transform: translateY(-2000px) rotate(-45deg);
    -ms-transform: translateY(-2000px) rotate(-45deg);
    transform: translateY(-2000px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
    -webkit-transform: translateY(30px) rotate(-45deg);
    -moz-transform: translateY(30px) rotate(-45deg);
    -o-transform: translateY(30px) rotate(-45deg);
    -ms-transform: translateY(30px) rotate(-45deg);
    transform: translateY(30px) rotate(-45deg);
  }
  80% {
    -webkit-transform: translateY(-10px) rotate(-45deg);
    -moz-transform: translateY(-10px) rotate(-45deg);
    -o-transform: translateY(-10px) rotate(-45deg);
    -ms-transform: translateY(-10px) rotate(-45deg);
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    -webkit-transform: translateY(0) rotate(-45deg);
    -moz-transform: translateY(0) rotate(-45deg);
    -o-transform: translateY(0) rotate(-45deg);
    -ms-transform: translateY(0) rotate(-45deg);
    transform: translateY(0) rotate(-45deg);
  }
}
@-o-keyframes bounce {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -webkit-transform: translateY(-2000px) rotate(-45deg);
    -moz-transform: translateY(-2000px) rotate(-45deg);
    -o-transform: translateY(-2000px) rotate(-45deg);
    -ms-transform: translateY(-2000px) rotate(-45deg);
    transform: translateY(-2000px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
    -webkit-transform: translateY(30px) rotate(-45deg);
    -moz-transform: translateY(30px) rotate(-45deg);
    -o-transform: translateY(30px) rotate(-45deg);
    -ms-transform: translateY(30px) rotate(-45deg);
    transform: translateY(30px) rotate(-45deg);
  }
  80% {
    -webkit-transform: translateY(-10px) rotate(-45deg);
    -moz-transform: translateY(-10px) rotate(-45deg);
    -o-transform: translateY(-10px) rotate(-45deg);
    -ms-transform: translateY(-10px) rotate(-45deg);
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    -webkit-transform: translateY(0) rotate(-45deg);
    -moz-transform: translateY(0) rotate(-45deg);
    -o-transform: translateY(0) rotate(-45deg);
    -ms-transform: translateY(0) rotate(-45deg);
    transform: translateY(0) rotate(-45deg);
  }
}
@keyframes bounce {
  0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -webkit-transform: translateY(-2000px) rotate(-45deg);
    -moz-transform: translateY(-2000px) rotate(-45deg);
    -o-transform: translateY(-2000px) rotate(-45deg);
    -ms-transform: translateY(-2000px) rotate(-45deg);
    transform: translateY(-2000px) rotate(-45deg);
  }
  60% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
    -webkit-transform: translateY(30px) rotate(-45deg);
    -moz-transform: translateY(30px) rotate(-45deg);
    -o-transform: translateY(30px) rotate(-45deg);
    -ms-transform: translateY(30px) rotate(-45deg);
    transform: translateY(30px) rotate(-45deg);
  }
  80% {
    -webkit-transform: translateY(-10px) rotate(-45deg);
    -moz-transform: translateY(-10px) rotate(-45deg);
    -o-transform: translateY(-10px) rotate(-45deg);
    -ms-transform: translateY(-10px) rotate(-45deg);
    transform: translateY(-10px) rotate(-45deg);
  }
  100% {
    -webkit-transform: translateY(0) rotate(-45deg);
    -moz-transform: translateY(0) rotate(-45deg);
    -o-transform: translateY(0) rotate(-45deg);
    -ms-transform: translateY(0) rotate(-45deg);
    transform: translateY(0) rotate(-45deg);
  }
}
`;
