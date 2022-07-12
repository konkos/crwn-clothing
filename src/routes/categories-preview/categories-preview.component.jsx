import React, { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.components'
import { CategoriesContext } from '../../contexts/categories.context'

export default function CategoriesPreview() {

    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {
                Object.keys(categoriesMap).map(key => {
                    const products = categoriesMap[key]
                    return <CategoryPreview key={key} title={key} products={products} />
                })
            }

        </>
    )
}
