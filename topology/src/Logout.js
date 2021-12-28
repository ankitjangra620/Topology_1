import React, { useEffect } from 'react'
import axios from 'axios'
function Logout() {
      useEffect(() => {
            axios.get("/logout")
                  .then((res, err) => {
                        console.log(res);
                  })
      }, [])
      return (
            <div>

            </div>
      )
}

export default Logout
