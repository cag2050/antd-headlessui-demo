import {Input, Image} from 'antd'
import SearchIcon from '../../static/images/search_icon.png'
import './SearchDemo.less'

// const {Search} = Input

const SearchDemo = () => {
    const onSearchChange = (e) => {
        console.log('onChange val:', e.target.value)
    }

    const onSearchPressEnter = (e) => {
        console.log('onPressEnter val:', e.target.value)
    }

    return (
        <div style={{margin: 50}}>
            <Input onChange={onSearchChange} onPressEnter={onSearchPressEnter} className="search-btn" placeholder='请输入数据表名称' prefix={<Image src={SearchIcon} preview={false}/>}></Input>
        </div>
    )
}

export default SearchDemo;