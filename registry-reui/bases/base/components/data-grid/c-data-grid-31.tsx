"use client"

import { useState } from "react"
import {
  DataGrid,
  DataGridContainer,
  dataGridFeatures,
  type DataGridFeatures,
} from "@/registry-reui/bases/base/reui/data-grid/data-grid"
import { DataGridPagination } from "@/registry-reui/bases/base/reui/data-grid/data-grid-pagination"
import { DataGridTable } from "@/registry-reui/bases/base/reui/data-grid/data-grid-table"
import type { ColumnDef, PaginationState } from "@tanstack/react-table"
import { useTable } from "@tanstack/react-table"

type Row = {
  id: number
  name: string
}

const data: Row[] = [{ id: 1, name: "Alex Johnson" }]
const columns: ColumnDef<DataGridFeatures, Row>[] = [
  { accessorKey: "name", header: "Name" },
]

export default function Pattern() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 5,
    pageSize: 1,
  })
  const table = useTable({
    features: dataGridFeatures,
    columns,
    data,
    manualPagination: true,
    pageCount: 50,
    getRowId: (row) => `${row.id}`,
    state: { pagination },
    onPaginationChange: setPagination,
  })

  return (
    <DataGrid table={table} recordCount={50}>
      <div className="w-full space-y-2.5">
        <DataGridContainer>
          <DataGridTable />
        </DataGridContainer>
        <DataGridPagination />
      </div>
    </DataGrid>
  )
}
