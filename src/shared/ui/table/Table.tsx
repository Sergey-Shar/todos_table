import { ReactNode } from 'react'
import './table.css'
export const Table = ({ children }: { children: ReactNode }) => {
	return <table className="table">{children}</table>
}
