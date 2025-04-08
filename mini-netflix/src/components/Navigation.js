import Link from 'next/link'

const Navigation = () => {

return (
    <div className="navigation">
        <div className="brand">
            <h1><a href="/">Mini Netflix</a></h1>
        </div>
        <style jsx>
            {`
                .navigation {
                    text-align: center;
                    color: red;
                }
                
                .navbar {
                    align-self: center;
                }

                ul li {
                    list-style: none;
                }
            `}
        </style>
    </div>
)

}

export default Navigation