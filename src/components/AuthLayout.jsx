import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected ({children, authentication = true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status) 

    useEffect (() => {

        if (authentication && authStatus  !== authentication) {
            navigate("/login");
        }else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    return (
        loader ? <div aria-live="polite" aria-busy="true" style={{ fontSize: "2rem", textAlign: "center" }}>
+                 Loading...
+             </div> : <>{children}</>
    )
}