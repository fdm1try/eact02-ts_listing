import './Listing.css';

interface IListingItemMainImage {
  'url_570xN': string
}

interface IListingItem {
  'listing_id': number
  url: string
  'MainImage': IListingItemMainImage
  title: string
  'currency_code': string
  price: string
  quantity: number
  state: string
}

interface IProps {
  items: Array<IListingItem>
}

export const Listing = ({ items }: IProps) => {
  const getPrice = (item: IListingItem) => {
    if (item.currency_code === 'USD') return `$${item.price}`;
    if (item.currency_code === 'EUR') return `€${item.price}`;
    return `${item.price} ${item.currency_code}`;
  }

  const getQuantityLevel = (item: IListingItem) => {
    if (item.quantity <= 10) return 'level-low';
    if (item.quantity > 20) return 'level-high';
    return 'level-medium';
  }

  return (
    <div className="item-list">
      {items.filter((item) => item.state === 'active').map((item: IListingItem) =>(
        <div key={item['listing_id']} className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item['MainImage']['url_570xN']} alt={item.title} /> 
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length <= 50 ? item.title : `${item.title?.substring(0, 50)}...`}
            </p>
            <p className="item-price">{getPrice(item)}</p>
            <p className={`item-quantity ${ getQuantityLevel(item) }`}>{item.quantity} left</p>
          </div>
        </div>
      ))}      
    </div>
  )
}
