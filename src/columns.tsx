import { createColumnHelper } from "@tanstack/react-table";
import { Token } from "./types";
import { FlexBox } from "./components";
import { convertToCurrency } from "./utils";
import './columns.scss'

const columnHelper = createColumnHelper<Token>()

export const columns = [
  columnHelper.accessor('name', {
    header: 'Token',
    cell: (info) => {
      const tokenName = info.getValue()
      return (
        <div className="token">
          <FlexBox flexDirection="row" alignItems="center" gap=".5rem">
            <img className="token__thumb" alt={`${tokenName} icon`} src={info.row.original.image} />
            <span className="token__title">{tokenName}</span>
          </FlexBox>
        </div>
      )
    }
  }),
  columnHelper.accessor('market_cap_rank', {
    header: 'Rank',
  }),
  columnHelper.accessor('symbol', {
    header: 'Symbol',
  }),
  columnHelper.accessor('current_price', {
    header: 'Current Price',
    cell: info => <CurrencyCell currency={info.getValue()} />
  }),
  columnHelper.accessor('high_24h', {
    header: 'High Price (24h)',
    cell: info => <CurrencyCell currency={info.getValue()} />
  }),
  columnHelper.accessor('low_24h', {
    header: 'Low Price (24h)',
    cell: info => <CurrencyCell currency={info.getValue()} />
  }),
  columnHelper.accessor('price_change_percentage_24h', {
    header: 'Price Change % (24h)',
    cell: info => {
      const isNegative = info.getValue() < 0
      return (
        <FlexBox justifyContent="flex-end">
          <span className={isNegative ? 'negative-value' : ''}>{info.getValue()}%</span>
        </FlexBox>
      )
    }
  })
]

// eslint-disable-next-line react-refresh/only-export-components
const CurrencyCell = ({ currency }: { currency: number }) => <FlexBox justifyContent="flex-end">{convertToCurrency(currency)}</FlexBox>
