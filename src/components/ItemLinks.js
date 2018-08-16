import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Launch from '@material-ui/icons/Launch'
import { translationLink } from '../actions'
import s from './ItemLinks.css'

const ItemLinks = ({
  value, items, fromLanguage, toLanguage, className,
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
      <Launch className={s.item_link_icon} />
    </Link >
    <span className={s.item_child_links} >
      {items.map((item, index) => (
        <Link
          className={`${className} ${s.item_link} ${s.item_child_link}`}
          onClick={event => event.stopPropagation()}
          to={translationLink({
            fromLanguage,
            toLanguage,
            word: item.value,
          })}
          key={item.value + index}
        >
          {item.children || item.value}
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
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    children: PropTypes.node,
  })),
  fromLanguage: PropTypes.string.isRequired,
  toLanguage: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default ItemLinks
