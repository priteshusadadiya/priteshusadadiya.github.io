---
title : What is the Test Plan / Test Approach ? and how to prepare it ?"
date : 2019-06-16
published: true
tags : ["testing",	"featured"]
category : ["Software Testing"]
canonical_url: false
description : "There are lots of documents and various Matrices that are need to prepared for any project. In this post I will explain below 5 points regarding the Entire test process in Software Development."
---

Test Documentation and planning were my least favorite things when I started my carrier. Mainly because Coding took preference above all others for me and I let others (read engineers at senior level) to take care of Test Planning and documentation. But as you progress more and more in your field, you start to get glimpse of why this things are important. There are lots of thing that we need to take care of in Testing of any Software.

<!--more-->

In this post, let me try to explain few points that everyone should follow when designing Test Process and Documentation of any given software product.

1. Creating the test Plan.
2. Preparing the test schedule.
3. Brief introduction of the different test types
4. Exit criteria that should be full filled before any production release.

### How to prepare the Test Plan / Test Approach.

There are lots of documents and various Matrices that are need to prepared for any project. 

__Why?__</br> 
Because these documents are the essential to the Understanding of the project as these are the Blueprint of the entire application.

As far as the QA is concerned Test Plan (also known as the Test Approach) also falls under the same category. 

So, lets break down the entire document process.

```
In General Test Plan Includes the following data.

1. Test Scope
   - In Scope
   - Out of Scope
2. Test Schedule
3. Test Types
4. Test Environment
5. Test Approach
6. Exit Criteria
7. Open Risks/Issues
   - Risks
   - Issues
```
</br>

#### 1. Test Scope: 
"Areas / Functionalities that will be included during the Test Cycle" is Known as a Test Scope.

In Other words

{{% blockquote %}}
Test Scope is the process of defining what features and functionalities are required to be tested and then making sure all of defined features and functionalities are thoroughly verified.
{{% /blockquote %}}

__*Let me give an example,*__
There is a new requirement for Implementation for the smart search (Filtering the data based on the keywords entered by the end users).

Now when this feature comes into the QA pool in a new Build then, entire focus of the Test should be this feature only and nothing else. This can be categories as a Test Scope.

Now Imagine few other requirements which are also needed to be included into the next release so, these items will be included into the Test Scope for that release.

Further the process can be divided into the 2 parts.

	1. In Scope: - Features / Functions that are to be tested
	2. Out of Scopes: - Features / Functions not to be tested
</br>
#### 2. Test Schedule: 
Everything that is to be tested should be as per the schedule (proposed and approved time frame on which deliverables are due). 

Test schedule can include variety of the phases. Some of them are listed below,
```
	A. Requirement Understanding
	B. Test Plan creation
	C. Test Cases creation
	D. Test Execution in Different Environments
	E. QA Sign-off*
```
You will have to provide the Start Date and End Date for Every Phase respectively,

Below is the description of the phases which can be helpful for identifying the potential start and end dates for every phase.

__*A. Requirement Understanding*__ : There are few things that needs to be happen before this stage can begin like, 

```
1. All the requirements should be clear and properly documented.
2. All Support document should be available.
3. Basic structure of the given requirements should be available, 
	like wire-frames, Design mocks, Data flow etc.
```
</br>
- Most of time frames for different phases can be derived from the requirements itself, if above three things are followed properly. </br>

__*B. Test Plan Creation*__: How much time it will take to prepare this document itself?

For every phase of the Test Schedule _*"Requirement Understanding"*_ is the part where you will actually know the efforts it will take to get things done.

__*C. Test Cases creation*__: Once Requirements are fixed and documented properly, you will be able to draft test case easily from them and also be able to provide time frame for the same.
   
__*D. Test Cases Execution*__: Now this is a bit tricky part as this will depend on the details of different Environment to be tested.

for example, if you are running the one test on Chrome, Firefox, IE and also on 5 Different devices then you will have a one test cases which executes 8 time in one Cycle.	
</br></br>With that in mind and other details like,
```
	- How May Test Cycle you are performing?
 	- What is the Scope of each Cycle? 
	- Each cycle can take different amount of time to complete. 
```
Will determine the time taken for each test cycle.

__*for example*__, first cycle will always be somewhat longer than the second because probability of finding the bugs/Defects are high in the first Iteration.
As cycle changes, amount bugs/Defects found during each Iteration will get smaller.
		
Based on the above details you can find the possible start and End Date of the Test Case Execution.

__*E. QA Sign-off*__: How do you determine that testing is complete? obviously you’ll need some kind of criteria to make sure that you’re confident that application under test works as intended. 
This criteria will be set as a pre-agreed upon exit gate definition, and once met testing will be completed.

</br>
#### 3. Test Types / categories:
The overall application will include the following testing types/techniques*: 

The below list of test depth/test techniques are used to assess application quality:
``` 
-	1. FT: Feature > Basic Feature Testing
-	2. G: GUI > Validate look and feel of the application
-	3. DB: Database > Verify DB interaction and CRUD procedures
-	4. E2E: End to End > Validate E2E business flows and system interaction
-	5. BR: Business Rule > Validate specific business rules with positive/negative conditions
-	6. SVC: Service Level Testing > Validate web service level features 
		(i.e. API`s, WS calls, etc.)
-	7. EH: Error Handling > Validate Application Error handling
-	8. BVA: Boundary Value Analysis > Review boundary values for feature/system interaction
-	9. ST: State Transition > Validate application state 
		(i.e. workflow, session, restful state validation, etc.)
-	10. BT: Branch Tree/Decision Matrix > Validate inputs/outputs of a group of rules 
-	11. DF: Data Flow > Validate system interaction
		with a concentration on ETL and CRUD procedures between system components
```
</br>
#### 4. Test Environment:
List of all the Environments on which Test cases will be executed.
</br>
#### 5. Test Approach: 
Here you should provide description of the features and other items to be tested along with the overall depth of testing and test methods used to discover defects.
</br>
#### 6. Exit Criteria: 
Exit criteria must be met before sign-off for production release will be provided by QA.

In another words "All things that should be done before providing the sign-off is known as an Exit Criteria"

Here are some examples of exit criteria 
```
	1. All Sprint Stories/Items Accepted by QA and it is Ready for Production
	2. Manual Regression Tests (Blocker and Critical Test Cases) have passed
	3. No Critical or Blocker defects outstanding.
	4. Automation Regression Suite Successfully Passed.
	5. Performance Tests executed successfully.
	6. Browser Compatibility works as expected.
```
</br>
- If Possible include all of the above and have one field to mark if criteria are applicable or not. If yes, then mark it "Yes" and "No" otherwise. </br>
- Also provide comments against each criteria for better understanding.

#### 7. Open Risks or Issues: 
Include all the bugs / Issues that are not fixed yet. 

- Add the appropriate linking of the issues with their description and priority.
- This information is critical and can have an effect on if Build should go into the next phase (Production release) or not.


Hope this information can be useful. </br>
