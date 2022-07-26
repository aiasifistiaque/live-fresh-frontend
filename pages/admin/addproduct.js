import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminPage from '../../components/nav/page/AdminPage';
import { useCreateProductMutation } from '../../store/services/apiService';
import { DetailsTable } from '../../components/util/tables/Details';
import Input from '../../components/util/input/Input';
import Button from '../../components/util/button/Button';
import InputSection from '../../components/util/input-section/InputSection';
import TextArea from '../../components/util/input/TextArea';

import { toast } from 'react-toastify';

const AddProduct = () => {
	const router = useRouter();

	const [name, setName] = useState();
	const [category, setCategory] = useState();
	const [price, setPrice] = useState();
	const [stock, setStock] = useState();
	const [unit, setUnit] = useState();
	const [description, setDescription] = useState();

	const [addNewProudct, result] = useCreateProductMutation();

	const { isLoading, isSuccess, isError, error } = result;

	const submitForm = async e => {
		e.preventDefault();

		addNewProudct({
			name,
			category,
			price,
			stock: stock ? stock : 0,
			description,
			unit,
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast('Product Added Successfully');
			router.replace('/admin/products');
		}
	}, [isSuccess]);

	return (
		<div>
			<AdminPage selected='Products'>
				<DetailsTable title='Add Product'>
					<form style={{ marginTop: 32 }} onSubmit={submitForm}>
						<Input
							label='Product Name'
							value={name}
							onChange={e => setName(e)}
							placeholder='Add product Name'
							required
						/>
						<TextArea
							label='Product Description'
							value={description}
							onChange={e => setDescription(e)}
							required
						/>

						<InputSection>
							<Input
								label='Category'
								value={category}
								onChange={e => setCategory(e)}
							/>
						</InputSection>

						<InputSection horizontal>
							<Input
								label='Price'
								value={price}
								onChange={e => setPrice(e)}
								placeholder='Product Price'
								required
							/>
							<Input
								label='Unit'
								value={unit}
								onChange={e => setUnit(e)}
								required
							/>
						</InputSection>

						<InputSection horizontal>
							<Input
								label='Opening stock'
								value={stock}
								onChange={e => setStock(e)}
								placeholder='Initial stock of product'
								type='Number'
							/>
						</InputSection>

						{isLoading ? (
							<Button>processing...</Button>
						) : (
							<Button submit>Create Product</Button>
						)}
					</form>

					{/* <Error isError={isError}>{error}</Error> */}
				</DetailsTable>
			</AdminPage>
		</div>
	);
};

export default AddProduct;
