import "./ItemsList.scss"

import React from 'react'
import { CircularProgress } from '@mui/material';
import ItemCard from '../ItemCard/ItemCard';

export default function ItemsList({ children }) {
  return (
    <div className="asset-list__container">
      {!children ? (
        <div className="asset-list__loading-container">
          <CircularProgress color="inherit" className="asset-list__loading" />
        </div>
      ) : (
        <ul className="asset-list__list">
          {children.length === 0 && <div className="asset-list__no-assets">На данный момент нет товаров 😞</div>}

          {children.map((asset, i) => {
            return (
              <li className="asset-list__item" key={`${asset.id}-${i}`}>
                <ItemCard />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  )
}
