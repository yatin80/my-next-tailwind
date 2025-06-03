import React from 'react'

export default function Layout({ children }) {
    return (
        <main className="w-full h-[calc(100vh-96px)]">
            {children}
        </main>
    )
}

// import React from 'react'

// export default function Layout({ children }) {
//     return (
//         <div className="w-full h-screen">
//             {children}
//         </div>
//     )
// }