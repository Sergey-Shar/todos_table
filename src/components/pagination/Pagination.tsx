import React, { useMemo } from 'react'
import { BaseButton } from '../../shared/ui/button'
import './pagination.css'

interface PaginationProps {
	totalTasksCount: number
	currentPage: number
	pageSize: number
	onPageChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
	totalTasksCount,
	currentPage,
	pageSize,
	onPageChange
}: PaginationProps) => {
	const totalPages = useMemo(
		() => Math.ceil(totalTasksCount / pageSize),
		[totalTasksCount, pageSize]
	)

	const pages = useMemo(
		() => Array.from({ length: totalPages }, (_, i) => i + 1),
		[totalPages]
	)

	const croppedPages = useMemo(() => {
		if (pages.length <= 5) {
			return pages
		}
		if (currentPage <= 3) {
			return pages.slice(0, 5)
		}
		if (currentPage + 2 >= totalPages) {
			return pages.slice(totalPages - 5, totalPages)
		}
		return pages.slice(currentPage - 3, currentPage + 2)
	}, [currentPage, pages, totalPages])

	return (
		<div className="pagination">
			<BaseButton disabled={currentPage === 1} onClick={() => onPageChange(1)}>
				First
			</BaseButton>
			<BaseButton
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Prev
			</BaseButton>
			{croppedPages[0] > 1 && (
				<>
					<BaseButton onClick={() => onPageChange(1)}>1</BaseButton>
					<span>...</span>
				</>
			)}
			{totalPages > 1 &&
				croppedPages.map((numPage) => (
					<BaseButton onClick={() => onPageChange(numPage)} key={numPage}>
						{numPage}
					</BaseButton>
				))}
			{croppedPages[croppedPages.length - 1] < totalPages - 1 && (
				<>
					<span>...</span>
					<BaseButton key={totalPages} onClick={() => onPageChange(totalPages)}>
						{totalPages}
					</BaseButton>
				</>
			)}
			<BaseButton
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</BaseButton>
			<BaseButton
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(totalPages)}
			>
				Last
			</BaseButton>
		</div>
	)
}
