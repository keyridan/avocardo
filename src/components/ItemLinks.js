import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LinkIcon from '@material-ui/icons/Link'
import { translationLink } from '../actions'
import s from './ItemLinks.css'

const ItemLinks = ({
  value, fromLanguage, toLanguage, className,
}) => (
  <div >
    <Link
      className={`${s.item_main_link} ${s.item_link}`}
      onClick={event => event.stopPropagation()}
      to={translationLink({
        fromLanguage,
        toLanguage,
        word: value,
      })}
    >
      <LinkIcon className={s.item_link_icon} />
    </Link>
    <span className={s.item_child_links}>
      {value.split(' ').map(item => (
        <Link
          className={`${className} ${s.item_link} ${s.item_child_link}`}
          onClick={event => event.stopPropagation()}
          to={translationLink({
            fromLanguage,
            toLanguage,
            word: item,
          })}
          key={fromLanguage + toLanguage + item}
        >
          {item}
        </Link >
      )).flatMap((element, i) => ([element,
        <span key={i} >
&nbsp;
        </span >]))
        .slice(0, -1)
      }
    </span >
  </div >
)

ItemLinks.propTypes = {
  value: PropTypes.string.isRequired,
  fromLanguage: PropTypes.string.isRequired,
  toLanguage: PropTypes.string.isRequired,
}

export default ItemLinks
