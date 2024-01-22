import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
export const BreadCrumdComponent = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const pathArr: string[] = pathname.slice(1).split('/');
  return (
    <Breadcrumb
        items={[
          {
            onClick: (e) => {
                navigate('/')
            },
            title: <HomeOutlined />,
          },
          ...(pathArr.map((path, index) => { 
            return {
              onClick: () => {
                    let newPath: string[] = [];
                    for(let i = 0; i<=index; i++){
                        newPath = newPath.concat(pathArr[i])
                    }
                    navigate(`/${newPath.join('/')}`)
                },
                title: path
            }
          }))
        ]}
      />
     )   
}
   
 