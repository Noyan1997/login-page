import cls from 'classnames'
import { FC, MouseEventHandler, useEffect, useState } from 'react'

export interface ITabDataSet {
  name: string
  id: string
  isActive: boolean
  onClick?: MouseEventHandler<HTMLElement>
}
interface IElasticTabProps {
  data: ITabDataSet[]
  onChangeTab?: (_selectedTab?: ITabDataSet) => void
}
const ElasticTab: FC<IElasticTabProps> = ({ data, onChangeTab }) => {
  const [selectedItemLeft, setSelectedItemLeft] = useState(4)
  const [activedTab, setActivedTab] = useState<string>('')
  useEffect(() => {
    data.forEach((_tabItem) => {
      if (_tabItem.isActive) setActivedTab(_tabItem.id)
    })
  }, [data])
  return (
    <div id="elastic-tab-core-component">
      <div className={cls('elasticTabContainer')}>
        {data.map((_tabItem) => (
          <div
            className={cls({
              'cursor-pointer': true,
              tabItem: true,
              active: activedTab === _tabItem.id,
            })}
            onClick={(event) => {
              const _offsetLeft = event.currentTarget.offsetLeft
              setSelectedItemLeft(_offsetLeft)
              setActivedTab(_tabItem.id)
              onChangeTab && onChangeTab(_tabItem as ITabDataSet)
            }}
            key={_tabItem.id}
          >
            {_tabItem.name}
          </div>
        ))}
      </div>
      <div
        className="selectedItem"
        style={{
          left: selectedItemLeft,
          width: `calc(100% / ${data.length})`,
        }}
      />
    </div>
  )
}
export default ElasticTab
