import '../css/header.css'

function Header() {
  return (
    <header className='header'>
      <h1>Portal de Notícias</h1>

      <nav>
        <a href='/'>Home</a>
        <a href='/login'>Login</a>
      </nav>
    </header>
  )
}

export default Header