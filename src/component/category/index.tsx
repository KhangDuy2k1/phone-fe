import classNames from "classnames/bind";
import styles from "./category.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { CategoryApi } from "../../api/category";
import { PopoverComponent } from "./popover";
import { useNavigate } from "react-router-dom";
const categoryApi = new CategoryApi();
const cx = classNames.bind(styles);
const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [categoryHover, setCategoryHover] = useState<number>()
  const [hoveredCategoryId, setHoveredCategoryId] = useState<boolean>(false);
  const navigate = useNavigate()
  useEffect(() => { 
    
     categoryApi.getAllCategory().then((data: {
         success: boolean,
         message: string,
         categories: any
     }): void => { 
      setCategories(data.categories)
     }).catch((error):void => {
      console.error(error)
     })
  }, [])

  const handleMouseEnter = (categoryId: number) => {
    setHoveredCategoryId(true)
    setCategoryHover(categoryId)
  };

  const handleMouseLeave = () => {
    setHoveredCategoryId(false);
  };


  return (
    <div>
<div className={cx('category-container')}>
              <div className={cx('category-content')}>
                      <ul className={cx('list-category-container')}>
                       
                        {
                          categories?.map((category: { 
                             id: number,
                             name: string,
                             phones: any
                          }): ReactElement => { 
                            return (
                              <div onClick={() => { 
                                     navigate(`/phone_category/${category.id}`)
                              }}>
                               
                            <li className={cx('category-item')}
                            onMouseEnter={() => handleMouseEnter(category.id)}
                            onMouseLeave={handleMouseLeave}
                            >
                               <h3>{
                                category.name
                               }</h3>
                            </li>
                              </div>
                            
                            )
                          })
                        }
                      </ul>
              </div>
          </div>
          {
           hoveredCategoryId && <PopoverComponent 
            onMouseEnter={() => setHoveredCategoryId(true)}
            onMouseLeave={handleMouseLeave} 
            contendCategory = {
                categories?.filter((category: {
                  id: number,
                  name: string,
                  phones: any
                }) => {
                     return category.id === categoryHover;
                })
          }/>
          } 
    </div>
  )
  
};
export default CategoryComponent;
