import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, createProduct, deleteProduct } from './store/actions';
import { Helmet } from 'react-helmet';
import styles from './style.css';
import withStyles from '../../withStyles';

const Home = ({ list, getProducts, deleteProduct, createProduct }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (!list.length) {
      getProducts();
    }
  }, []);

  const handleCreate = () => {
    if (!name) return alert('请输入商品名称');
    if (!manufacturer) return alert('请输入生产厂商');
    if (!price) return alert('请输入商品价格');
    createProduct({ name, manufacturer, price });
    setName('');
    setManufacturer('');
    setPrice('');
  };

  const handleDelete = productId => deleteProduct(productId);

  return (
    <div className={styles.content}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React SSR - 这是首页标题</title>
        <meta name="description" content="这是WilliamCui的项目，用来学习测速react SSR技术的" />
      </Helmet>
      <div className={styles.count}>
        <p>You are clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div className={styles.products}>
        <ul className={styles.create}>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="manufacturer">Manufacturer</label>
            <input
              type="text"
              id="manufacturer"
              value={manufacturer}
              onChange={e => setManufacturer(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" value={price} onChange={e => setPrice(e.target.value)} />
          </li>
          <li>
            <button onClick={handleCreate}>Create</button>
          </li>
        </ul>
        <ul className={styles.list}>
          {list.map(({ id, name, price }) => (
            <li key={id}>
              <span>
                {name}-{price}
              </span>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ list: state.home.newList });

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
  createProduct: ({ name, manufacturer, price }) =>
    dispatch(createProduct({ name, manufacturer, price }))
});

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Home, styles));

exportHome.loadData = store => store.dispatch(getProducts());

export default exportHome;
