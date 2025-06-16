// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Products from './Products';
// import { useState, useEffect } from 'react';
// import { getCategories } from '../Apis/categories';
// import axios from 'axios';
// import Loading from './Loading';
// import { getProducts } from '../Apis/products';

// export default function LabTabs({ loading2 }) {
//   const [value, setValue] = useState("0"); // as string
//   const [categories, setCategories] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function getCategoriesApi() {
//     try {
//       setLoading(true);
//       const data = await getCategories();
//       const products = await getProducts();
//       setCategories(data);
//       setAllProducts(products);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getCategoriesApi();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const filterProducts = (categoryId) => {
//     if (categoryId === "0") return allProducts;
//     return allProducts.filter(p => p.categoryId === parseInt(categoryId));
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList
//             onChange={handleChange}
//             aria-label="category tabs"
//             sx={{
//               '& .MuiTabs-indicator': {
//                 backgroundColor: '#03543F',
//               },
//               '& .MuiTab-root': {
//                 color: '#03543F',
//                 '&.Mui-selected': {
//                   color: '#03543F',
//                 },
//               },
//             }}
//           >
//             <Tab label="All" value="0" />
//             {categories.map((category) => (
//               <Tab key={category.id} label={category.name} value={category.id.toString()} />
//             ))}
//           </TabList>
//         </Box>

//         {(loading || loading2) ? (
//           <div className='flex justify-center items-center'>
//             <Loading type="spin" color='#03543F' />
//           </div>
//         ) : (
//           <>
//             {[{ id: "0", name: "All" }, ...categories.map(c => ({ id: c.id.toString(), name: c.name }))].map((tab) => (
//               <TabPanel key={tab.id} value={tab.id}>
//                 <div className="flex flex-wrap">
//                   {filterProducts(tab.id).length > 0 ? (
//                     filterProducts(tab.id).map((product) => (
//                       <div key={product.id} className="w-2/4 md:w-1/4 lg:w-1/6 shadow-md flex flex-col p-2">
//                         <Products product={product} />
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-center w-full text-gray-500">No products found.</p>
//                   )}
//                 </div>
//               </TabPanel>
//             ))}
//           </>
//         )}
//       </TabContext>
//     </Box>
//   );
// }




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Products from './Products';
// import { useState, useEffect } from 'react';
// import { getCategories } from '../Apis/categories';
// import Loading from './Loading';

// export default function LabTabs({ loading2, allProducts, filteredProducts, searchQuery }) {
//   const [value, setValue] = useState("0"); // active tab
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function getCategoriesApi() {
//     try {
//       setLoading(true);
//       const data = await getCategories();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getCategoriesApi();
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const filterProducts = (categoryId) => {
//     if (categoryId === "0") return allProducts;
//     return allProducts.filter(p => p.categoryId === parseInt(categoryId));
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList
//             onChange={handleChange}
//             aria-label="category tabs"
//             sx={{
//               '& .MuiTabs-indicator': {
//                 backgroundColor: '#03543F',
//               },
//               '& .MuiTab-root': {
//                 color: '#03543F',
//                 '&.Mui-selected': {
//                   color: '#03543F',
//                 },
//               },
//             }}
//           >
//             <Tab label="All" value="0" />
//             {categories.map((category) => (
//               <Tab key={category.id} label={category.name} value={category.id.toString()} />
//             ))}
//           </TabList>
//         </Box>

//         {(loading || loading2) ? (
//           <div className="flex justify-center items-center">
//             <Loading type="spin" color="#03543F" />
//           </div>
//         ) : searchQuery ? (
//           <div className="flex flex-wrap px-4">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <div key={product.id} className="w-2/4 md:w-1/4 lg:w-1/6 shadow-md flex flex-col p-2">
//                   <Products product={product} />
//                 </div>
//               ))
//             ) : (
//               <p className="text-center w-full text-gray-500">No products found.</p>
//             )}
//           </div>
//         ) : (
//           <>
//             {[{ id: "0", name: "All" }, ...categories.map(c => ({ id: c.id.toString(), name: c.name }))].map((tab) => (
//               <TabPanel key={tab.id} value={tab.id}>
//                 <div className="flex flex-wrap">
//                   {filterProducts(tab.id).length > 0 ? (
//                     filterProducts(tab.id).map((product) => (
//                       <div key={product.id} className="w-2/4 md:w-1/4 lg:w-1/6 shadow-md flex flex-col p-2">
//                         <Products product={product} />
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-center w-full text-gray-500">No products found.</p>
//                   )}
//                 </div>
//               </TabPanel>
//             ))}
//           </>
//         )}
//       </TabContext>
//     </Box>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Products from './Products';
import { useState, useEffect } from 'react';
import { getCategories } from '../Apis/categories';
import Loading from './Loading';

export default function DisabledTabs({ loading2, allProducts, filteredProducts, searchQuery }) {
  const [value, setValue] = useState("0");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCategoriesApi() {
    try {
      setLoading(true);
      const data = await getCategories();
      console.log(data.data);
      setCategories(data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoriesApi();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getProductsForTab = (categoryId) => {
    const source = searchQuery ? filteredProducts : allProducts;
    if (categoryId === "0") return source;
    return source.filter(p => p.categoryId === parseInt(categoryId));
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="category tabs"
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#03543F' },
              '& .MuiTab-root': {
                color: '#03543F',
                '&.Mui-selected': { color: '#03543F' },
              },
            }}
          >
            <Tab label="All" value="0" />
            {categories.map((category) => (
              <Tab key={category.id} label={category.name} value={category.id.toString()} />
            ))}
          </TabList>
        </Box>

        {(loading || loading2) ? (
          <div className="flex justify-center items-center">
            <Loading type="spin" color="#03543F" />
          </div>
        ) : (
          <>
            {[{ id: "0" }, ...categories.map(c => ({ id: c.id.toString() }))].map((tab) => (
              <TabPanel key={tab.id} value={tab.id}>
                <div className="flex flex-wrap">
                  {getProductsForTab(tab.id).length > 0 ? (
                    getProductsForTab(tab.id).map((product) => (
                      <div key={product.id} className="w-2/4 md:w-1/4 lg:w-1/6 shadow-md flex flex-col p-2">
                        <Products product={product} />
                      </div>
                    ))
                  ) : (
                    <p className="text-center w-full text-gray-500">No products found.</p>
                  )}
                </div>
              </TabPanel>
            ))}
          </>
        )}
      </TabContext>
    </Box>
  );
}

