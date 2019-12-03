import React from 'react'
import Link from 'next/link';
import { light as t } from '../constants/themes';

const Nav = () => (
  <>
    <nav>
      <ul className='container'>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>right</a>
          </Link>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      ul {
        display: flex;
        justify-content: space-between;
      }
      a {
        color: ${t.colors.black};
        text-decoration: none;
        font-weight: 600;
        text-shadow: ${t.shadows.text}
        transition: .3s;
      }
      a:hover {
        color: ${t.colors.gray}
      }
    `}</style>
  </>
)

export default Nav
