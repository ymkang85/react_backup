import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body{
        font-family: 'Jost', sans-serif;
    }
    *, *:before, *:after{
        scroll-behavior: smooth;
        margin:0;
        padding:0;
        box-sizing:border-box;
        boxsizing:inhrit;
    }

    a{
        text-decoration:none;
        color:inherit;
    }

    button{
        cursor:pointer;
        border:none;
        background:none;
        outline:none;
    }

    ul, ol, li{
        list-style:none;
    }

    main{
        position:relative;
    }
`;