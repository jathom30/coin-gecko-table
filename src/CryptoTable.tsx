import { useQuery } from "@tanstack/react-query"
import { getCrypto } from "./api"
import { useSpinDelay } from "spin-delay"
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { columns } from "./columns"
import './Cryptotable.scss'
import { Fetching, FlexBox, Loader } from "./components"
import { IconBug } from "@tabler/icons-react"

const SECOND = 1000
const MINUTE = SECOND * 60

export const CryptoTable = () => {
  const { data: tokens, status, fetchStatus } = useQuery(['coin-market'], async () => {
    const response = await getCrypto()
    return response
  }, {
    // refetches data every minute
    refetchInterval: MINUTE,
  })

  // use spin delay is a helper that prevents flashes of loading state
  const isLoading = useSpinDelay(status === 'loading')
  const isFetching = useSpinDelay(fetchStatus === 'fetching')

  // extremely basic tanstack table setup
  const table = useReactTable({
    data: tokens || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading) {
    return <Loader />
  }

  if (status === 'error') {
    return (
      <div className="CryptoTable--error">
        <FlexBox flexDirection="column" alignItems="center" gap="0">
          <FlexBox alignItems="center" gap="1rem">
            <IconBug size={42} />
            <h1>Oops...</h1>
          </FlexBox>
          <p>Looks like something went wrong</p>
        </FlexBox>
      </div>
    )
  }

  return (
    <table className="CryptoTable">
      {/* added a small fetching indicator when data is refetched */}
      {isFetching ? <Fetching /> : null}
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th className="CryptoTable__header" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td className="CryptoTable__cell" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

