import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Button, Input, Table } from 'reactstrap'
import './index.css'

class Body extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			currency: null,
		}
	}
	

	logic = () => {
		const { currency } = this.state

		//counting by Rp 100.000
		const result1 = currency / 100000
		const cash1 = `${Math.floor(result1)} x Rp 100.000`
		// const cash1 = Math.floor(result1)
		let modulus = currency % 100000
	
		//counting by Rp 50.000
		const result2 = modulus / 50000
		const cash2 = `${Math.floor(result2)} x Rp 50.000`
		// const cash2 = Math.floor(result2)
		modulus = modulus % 50000
		
		//counting by Rp 20.000
		const result3 = modulus / 20000
		const cash3 = `${Math.floor(result3)} x Rp 20.000`
		// const cash3 = Math.floor(result3)
		modulus = modulus % 20000

		//counting by Rp 10.000
		const result4 = modulus / 10000
		const cash4 = `${Math.floor(result4)} x Rp 10.000`
		// const cash4 = Math.floor(result4)
		modulus = modulus % 10000

		//counting by Rp 5.000
		const result5 = modulus / 5000
		const cash5 = `${Math.floor(result5)} x Rp 5.000`
		// const cash5 = Math.floor(result5)
		modulus = modulus % 5000

		//counting by Rp 1.000
		const result6 = modulus / 1000
		const cash6 = `${Math.floor(result6)} x Rp 1.000`
		// const cash6 = Math.floor(result6)
		modulus = modulus % 1000

		//counting by Rp 500
		const result7 = modulus / 500
		const cash7 = `${Math.floor(result7)} x Rp 500`
		// const cash7 = Math.floor(result7)
		modulus = modulus % 500

		//counting by Rp 100
		const result8 = modulus / 100
		const cash8 = `${Math.floor(result8)} x Rp 100`
		// const cash8 = Math.floor(result8)
		modulus = modulus % 100

		//counting by Rp 50
		const result9 = modulus / 50
		const cash9 = `${Math.floor(result9)} x Rp 50`
		// const cash9 = Math.floor(result9)
		modulus = modulus % 50

		return (
			<Table bordered hover dark style={{ textAlign: 'center' }}>
				<thead>
					<tr>
						<th> No. </th>
						<th> Pecahan </th>
						<th> Banyak Pecahan </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row"> 1 </th>
						{/* <td> Rp 100.000 </td> */}
						<td> <img src="https://www.leftovercurrency.com/wp-content/uploads/2017/12/100000-indonesian-rupiah-banknote-soekarno-and-hatta-obverse.jpg" name="Rp 100.000" width="200px" /> </td>
						<td> {cash1} </td>
					</tr>
					<tr>
						<th scope="row"> 2 </th>
						{/* <td> Rp 50.000 </td> */}
						<td> <img src="https://upload.wikimedia.org/wikipedia/id/c/c6/50.000Rp-front.jpg" name="Rp 100.000" width="200px" /> </td>
						<td> {cash2} </td>
					</tr>
					<tr>
						<th scope="row"> 3 </th>
						{/* <td> Rp 20.000 </td> */}
						<td> <img src="https://s.kaskus.id/images/2013/01/13/2594945_20130113035927.jpg" name="Rp 100.000" width="200px" /> </td>
						<td> {cash3} </td>
					</tr>
					<tr>
						<th scope="row"> 4 </th>
						{/* <td> Rp 10.000 </td> */}
						<td> <img src="http://4.bp.blogspot.com/-zvATC1DrJ_I/Tie_bv7TcYI/AAAAAAAACAU/oKj0jpVhMfc/s400/10000-kertas.jpg" name="Rp 100.000" width="200px" /> </td>
						<td> {cash4} </td>
					</tr>
					<tr>
						<th scope="row"> 5 </th>
						{/* <td> Rp 5.000 </td> */}
						<td> <img src="http://www.nasionalisme.co/wp-content/uploads/2016/09/Uang-Imam-Bonjol.jpg" name="Rp 100.000" width="200px" /> </td>
						<td> {cash5} </td>
					</tr>
					<tr>
						<th scope="row"> 6 </th>
						{/* <td> Rp 1.000 </td> */}
						<td> <img src="https://mustlieliek.files.wordpress.com/2012/05/uang-seribu.jpg?w=1024&h=463&crop=1" name="Rp 100.000" width="200px" /> </td>
						<td> {cash6} </td>
					</tr>
					<tr>
						<th scope="row"> 7 </th>
						{/* <td> Rp 500 </td> */}
						<td> <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2016/3/7/7835941/7835941_39a9b1af-264a-40a2-a036-454937fcbf0a.jpg" name="Rp 100.000" width="100px" /> </td>
						<td> {cash7} </td>
					</tr>
					<tr>
						<th scope="row"> 8 </th>
						{/* <td> Rp 100 </td> */}
						<td> <img src="https://i.colnect.net/f/2917/564/100-Rupiah.jpg" name="Rp 100.000" width="100px" /> </td>
						<td> {cash8} </td>
					</tr>
					<tr>
						<th scope="row"> 9 </th>
						{/* <td> Rp 50 </td> */}
						<td> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Komodo_coin_Indonesia_Dscn0057.png" name="Rp 100.000" width="100px" /> </td>
						<td> {cash9} </td>
					</tr>
				</tbody>
			</Table>
		)
	}
	
  render() {
		const { currency } = this.state
		console.log('cek state:', this.state)
    return (
      <Container >
        <Row>
					<Col>

						<Form onSubmit={(e) => this.logic(e)}>
							<FormGroup style={{ textAlign: "center"}}>
								<Label className="text-title" for="currency"> Masukkan Nilai Uang </Label>
								<Input 
									className="input-title"
									type="number"
									id="currency"
									name="currency"
									placeholder="contoh: 10000"
									onChange={(event) => this.setState({
										currency: event.target.value
										})
									}
									value={currency}
								/>
							
							</FormGroup>
						</Form>
					</Col>
        </Row>
        <Row>
					<Col>
						{
							(currency) &&
							<React.Fragment>
								<p className="text-title"> Hasil Pecahan Mata Uang </p>
								<div> {this.logic()} </div>
							</React.Fragment>
							//  :
							// <Label> </Label>
						}
					</Col>
        </Row>
      </Container>
    )
  }
}

export default Body