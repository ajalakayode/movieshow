 export const metadata = {
    title: "About |Create a movie app",
    description: "Learn about | A movie application",
    keywords: 'nollywood, hollywood'
 };

export default function Aboutlayout  ({children}) {
  return (
    <div> 
        <h1>about page</h1>
        {children}
    </div>
  )
}
