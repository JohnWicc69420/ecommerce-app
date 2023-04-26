import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='container flex'>
    <div class="left">
            <div class="logo">
                <a href="#">Logo</a>
            </div>
        </div>
        <div class="right">
            <ul class="items flex justify-between">
                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="#">value1</a>
                </li>

                <li>
                    <a href="#">value1</a>
                </li>

                <li>
                    <a href="#">value1</a>
                </li>

                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Navbar