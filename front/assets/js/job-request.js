(function($){
	"use strict";


	// ----------------------------------------------------------------
	
	// $(".jobRequestForm").on("submit", function (e) {


	// 	var drivingLicenceType;
	// 	var drivingLicenceNo;
	// 	var drivingLicenceIssuesDate;
	// 	var drivingLicenceExpiryDate;
	// 	var drivingLicenceIssuesPlace;
	// 	var bloodType;
	
	// 	$("#drivingLicenceType").keyup(function (e) {
	// 		// console.log(e.target.value);
	// 		drivingLicenceType = e.target.value;
	// 	})
	
	// 	$("#drivingLicenceNo").keyup(function (e) {
	// 		drivingLicenceNo = e.target.value;
	// 	})
	
	// 	$("#drivingLicenceIssuesDate").keyup(function (e) {
	// 		drivingLicenceIssuesDate = e.target.value;
	// 	})
	
	// 	$("#drivingLicenceExpiryDate").keyup(function (e) {
	// 		drivingLicenceExpiryDate = e.target.value;
	// 	})
	
	// 	$("#drivingLicenceIssuesPlace").keyup(function (e) {
	// 		drivingLicenceIssuesPlace = e.target.value;
	// 	})
	
	// 	$("#bloodType").keyup(function (e) {
	// 		bloodType = e.target.value;
	// 	})
	
		
	
	// 	var jobRequestFormData = [
	// 		{
	// 			drivingLicence: {
	// 				drivingLicenceType: drivingLicenceType,
	// 				drivingLicenceNo: drivingLicenceNo,
	// 				drivingLicenceIssuesDate: drivingLicenceIssuesDate,
	// 				drivingLicenceExpiryDate: drivingLicenceExpiryDate,
	// 				drivingLicenceIssuesPlace: drivingLicenceIssuesPlace,
	// 				bloodType: bloodType,
	// 			}
	// 		},
	// 	];


	// 	e.preventDefault();
  //   console.log("Form Submitted: ", jobRequestFormData)
	// });
	let workHistory = [];
	let courses = [];
	let persons = [];

	$(".jobRequestForm").submit(function (event) { 
		let obj_form = $(this).serializeArray(); 
		let formArray = [];
		obj_form.forEach(function (input) { 
			// formArray[input.name] = input.value
			formArray.push({ [input.name]: input.value})
		}) 

		formArray.push(
			{workHistory: workHistory},
			{courses: courses},
			{persons: persons},
		)
		// console.log(formArray);
		// console.log(formArray.length);

		
		
		
		event.preventDefault(); 
	}); 

	// let workCompanyPeriodVal = $("#workCompanyPeriod-1").val();
	// let workCompanyNameVal = $("#workCompanyName-1").val();
	


	// $("#addWork").on('click', function (event) {
	// 	let workHistory = [
	// 		{
	// 			workCompanyPeriod: workCompanyPeriodVal,
	// 			workCompanyName: workCompanyNameVal,
	// 		}
	// 	];
	// 	console.log("workHistory: ", workHistory)
	// })


	// ----------------------------------------------------------------

	// Add New Work History
	let numOfPrevWorks = 1;
	let workCompanyPeriodVal;
	let workCompanyNameVal;
	let workCompanyPhoneVal;
	let workCompanyAddressVal;
	let workCompanySalaryVal;
	let workCompanyOVTVal;
	let workCompanyTitleVal;
	let workCompanyJobDetailsVal;
	let workCompanyLeaveReasonVal;
	// let workCompanyPeriodVal = $("#workCompanyPeriod-1").val();
	// let workCompanyNameVal = $("#workCompanyName-1").val();

	
	
	$("#addWork").on('click', function (event) {
		event.preventDefault();

		workCompanyPeriodVal = $(`#workCompanyPeriod-${numOfPrevWorks}`).val();
		workCompanyNameVal = $(`#workCompanyName-${numOfPrevWorks}`).val();
		workCompanyPhoneVal = $(`#workCompanyPhone-${numOfPrevWorks}`).val();
		workCompanyAddressVal = $(`#workCompanyAddress-${numOfPrevWorks}`).val();
		workCompanySalaryVal = $(`#workCompanySalary-${numOfPrevWorks}`).val();
		workCompanyOVTVal = $(`#workCompanyOVT-${numOfPrevWorks}`).val();
		workCompanyTitleVal = $(`#workCompanyTitle-${numOfPrevWorks}`).val();
		workCompanyJobDetailsVal = $(`#workCompanyJobDetails-${numOfPrevWorks}`).val();
		workCompanyLeaveReasonVal = $(`#workCompanyLeaveReason-${numOfPrevWorks}`).val();
		
		numOfPrevWorks += 1;

		var newWork = `
			<div class="uk-margin" id="firstWork">
				<label class="uk-form-label inpLabel title text-white" for="form-stacked-select">بيانات العمل:</label>
				<div class="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s">
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="start_work_period" id="workCompanyPeriod-${numOfPrevWorks}" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="تاريخ البدء">
						</div>
						<div class="item uk-margin">
							<input type="text" class="uk-input" name="end_work_period" id="workCompanyPeriod-${numOfPrevWorks}" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="تاريخ الانتهاء">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="employer_name" id="workCompanyName-${numOfPrevWorks}" placeholder="اسم الشركة / صاحب العمل">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="employer_phone" id="workCompanyPhone-${numOfPrevWorks}" placeholder="الهاتف">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="employer_address" id="workCompanyAddress-${numOfPrevWorks}" placeholder="العنوان">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="previous_salary" id="workCompanySalary-${numOfPrevWorks}" placeholder="الراتب">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="previous_OVT" id="workCompanyOVT-${numOfPrevWorks}" placeholder="البدلات">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="previous_title" id="workCompanyTitle-${numOfPrevWorks}" placeholder="مسمى الوظيفة">
						</div>
						<div class="item uk-margin">
								<textarea name="previous_duties" id="workCompanyJobDetails-${numOfPrevWorks}" class="uk-textarea" cols="30" rows="2"  placeholder="تفاصيل عن واجباتك"></textarea>
						</div>
						<div class="item uk-margin">
								<textarea name="previous_leave_reason" id="workCompanyLeaveReason-${numOfPrevWorks}" class="uk-textarea" cols="30" rows="2"  placeholder="سبب ترك العمل"></textarea>
						</div>
				</div>
			</div>
		`;
		$("#firstWork").append(newWork);


		workHistory.push({
			workCompanyPeriod: workCompanyPeriodVal,
			workCompanyName: workCompanyNameVal,
			workCompanyPhone: workCompanyPhoneVal,
			workCompanyAddress: workCompanyAddressVal,
			workCompanySalary: workCompanySalaryVal,
			workCompanyOVT: workCompanyOVTVal,
			workCompanyTitle: workCompanyTitleVal,
			workCompanyJobDetails: workCompanyJobDetailsVal,
			workCompanyLeaveReason: workCompanyLeaveReasonVal,
		})

		// console.log("workHistory: ", workHistory)
	})
// -----------------------------------------------------------------
// Add New Course
	let instituteNameVal;
	let instituteCityVal;
	let instituteCourseFromVal;
	let instituteCourseToVal;
	let instituteCourseSpecializeVal;

	let numOfCourses = 1;
	$("#addCourse").on('click', function (event) {
		event.preventDefault();

		instituteNameVal = $(`#instituteName-${numOfCourses}`).val();
		instituteCityVal = $(`#instituteCity-${numOfCourses}`).val();
		instituteCourseFromVal = $(`#instituteCourseFrom-${numOfCourses}`).val();
		instituteCourseToVal = $(`#instituteCourseTo-${numOfCourses}`).val();
		instituteCourseSpecializeVal = $(`#instituteCourseSpecialize-${numOfCourses}`).val();

		numOfCourses += 1;

		var newCourse = `
			<div class="uk-margin" id="firstCourse">
				<label class="uk-form-label inpLabel title text-white" for="form-stacked-select">بيانات الدورة</label>
				<div class="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-5@xl uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-2@s">
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="instituteName-${numOfCourses}" id="instituteName-${numOfCourses}" placeholder="اسم المعهد">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="instituteCity-${numOfCourses}" id="instituteCity-${numOfCourses}" placeholder="المدينة / البلد">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="instituteCourseFrom-${numOfCourses}" id="instituteCourseFrom-${numOfCourses}" placeholder="من تاريخ">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="instituteCourseTo-${numOfCourses}" id="instituteCourseTo-${numOfCourses}" placeholder="الى تاريخ">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="instituteCourseSpecialize-${numOfCourses}" id="instituteCourseSpecialize-${numOfCourses}" placeholder="التخصص">
						</div>
				</div>
			</div>
		`;
		$("#firstCourse").append(newCourse);

		courses.push({
			instituteName: instituteNameVal,
			instituteCity: instituteCityVal,
			instituteCourseFrom: instituteCourseFromVal,
			instituteCourseTo: instituteCourseToVal,
			instituteCourseSpecialize: instituteCourseSpecializeVal
		})

		// console.log("courses: ", courses)
	})


// -----------------------------------------------------------------
// Add New Person
	let refrencePersonNameVal;
	let refrencePersonJobVal;
	let refrencePersonCompanyVal;
	let refrencePersonPhoneVal;
	let refrencePersonAddressVal;

	let numOfPersons = 1;
	$("#addPerson").on('click', function (event) {
		event.preventDefault();

		refrencePersonNameVal = $(`#refrencePersonName-${numOfPersons}`).val();
		refrencePersonJobVal = $(`#refrencePersonJob-${numOfPersons}`).val();
		refrencePersonCompanyVal = $(`#refrencePersonCompany-${numOfPersons}`).val();
		refrencePersonPhoneVal = $(`#refrencePersonPhone-${numOfPersons}`).val();
		refrencePersonAddressVal = $(`#refrencePersonAddress-${numOfPersons}`).val();

		numOfPersons += 1;
		
		var newPerson = `
			<div class="uk-margin" id="firstPerson">
				<label class="uk-margin uk-form-label inpLabel title text-white" for="form-stacked-select">بيانات الشخص:</label>
				<div class="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-5@xl uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-2@s">
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="refrencePersonName-${numOfPersons}" id="refrencePersonName-${numOfPersons}" placeholder="الاسم">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="refrencePersonJob-${numOfPersons}" id="refrencePersonJob-${numOfPersons}" placeholder="الوظيفة">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="refrencePersonCompany-${numOfPersons}" id="refrencePersonCompany-${numOfPersons}" placeholder="الشركة">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="refrencePersonPhone-${numOfPersons}" id="refrencePersonPhone-${numOfPersons}" placeholder="الهاتف">
						</div>
						<div class="item uk-margin">
								<input type="text" class="uk-input" name="refrencePersonAddress-${numOfPersons}" id="refrencePersonAddress-${numOfPersons}" placeholder="العنوان">
						</div>
				</div>
			</div>
		`;
		$("#firstPerson").append(newPerson);

		persons.push({
			refrencePersonName: refrencePersonNameVal,
			refrencePersonJob: refrencePersonJobVal,
			refrencePersonCompany: refrencePersonCompanyVal,
			refrencePersonPhone: refrencePersonPhoneVal,
			refrencePersonAddress: refrencePersonAddressVal
		})

		// console.log("persons: ", persons)
	})



}(jQuery));