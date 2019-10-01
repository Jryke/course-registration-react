/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media
} from "reactstrap";
import {Link} from "react-router-dom"
// core components

class TeachersTable extends React.Component {
	orderList = () => {
		let orderedList = this.props.teachers.sort((a,b) => {
			var teacherA = a.name.toUpperCase()
			var teacherB = b.name.toUpperCase()
			return teacherA < teacherB ? -1 : teacherA > teacherB ? 1 : 0
		})
		return orderedList
	}
	renderStudents = (teacher) => {
		if (this.props.location.pathname === '/admin/teachers') {
			return(
				<td>
					<div>
						<Link to={`teacher/${teacher.name}`}>
							{teacher.students.length} students
						</Link>
					</div>
				</td>
			)
		}
	}
	redirect = (e, item) => {
		e.preventDefault()
		this.props.history.push({
			pathname: `/admin/${item.name}`,
		})
	}
  render() {
    return (
			<>
				{
					this.orderList().map((teacher, key) => {
						return(
							<tr key={key}>
								<td>
									<Media className="align-items-center">
										<Link
											to={`teacher/${teacher.name}`}
											className="avatar rounded-circle mr-3"
										>
											<img
												alt={teacher.img.alt}
												src={teacher.img.src}
											/>
										</Link>
										<Media>
											<span className="mb-0 text-sm">
												<Link to={`teacher/${teacher.name}`}>
													{teacher.name}
												</Link>
											</span>
										</Media>
									</Media>
								</td>
								<td>
									{
										teacher.courses.map((course, key) => {
											return(
												<div key={key}>
													<Link to={`course/${course.name}`}>
														{course.name}
													</Link>
												</div>
											)
										})
									}
								</td>
								<td>{
									teacher.courses.map((course, key) => {
										return(
											<div key={key}>
												<Link to={`subject/${course.subject}`} onClick={e => {
														e.stopPropagation()
													}}>
													{course.subject}
												</Link>
											</div>
										)
									})
								}</td>
								{
									this.renderStudents(teacher)
								}
								<td>
									<Badge color="" className="badge-dot mr-4">
										<i className="bg-warning" />
										pending
									</Badge>
								</td>
								<td className="text-right">
									<UncontrolledDropdown>
										<DropdownToggle
											className="btn-icon-only text-light"
											href="#pablo"
											role="button"
											size="sm"
											color=""
											onClick={e => e.preventDefault()}
										>
											<i className="fas fa-ellipsis-v" />
										</DropdownToggle>
										<DropdownMenu className="dropdown-menu-arrow" right>
											<DropdownItem
												href="#pablo"
												onClick={e => e.preventDefault()}
											>
												Add to cart
											</DropdownItem>
											<DropdownItem
												href="#pablo"
												onClick={e => e.preventDefault()}
											>
												Add to cart and register
											</DropdownItem>
											<DropdownItem
												href="#pablo"
												onClick={e => e.preventDefault()}
											>
												Something else here
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</td>
							</tr>
						)
					})
				}
			</>
    );
  }
}

export default TeachersTable;
