// import React from 'react'

// // import { Container } from './styles';

// const Contact: React.FC = () => {
//   return (
//     <form className="space-y-8 divide-y divide-gray-200">
//   <div className="space-y-8 divide-y divide-gray-200">
//     <div>

//       <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//     <div className="pt-8">
//       <div>
//         <h3 className="text-lg leading-6 font-medium text-gray-900">
//           Personal Information
//         </h3>
//         <p className="mt-1 text-sm text-gray-500">
//           Use a permanent address where you can receive mail.
//         </p>
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
//         <div className="sm:col-span-3">
//           <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
//             First name
//           </label>
//           <div className="mt-1">
//             <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
//           </div>
//         </div>

//         <div className="sm:col-span-3">
//           <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
//             Last name
//           </label>
//           <div className="mt-1">
//             <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email address
//           </label>
//           <div className="mt-1">
//             <input id="email" name="email" type="email" autoComplete="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
//           </div>
//         </div>

//         <div className="sm:col-span-3">
//           <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
//             Reason to contact
//           </label>
//           <div className="mt-1">
//             <select id="reason" name="reason" autoComplete="reason" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
//               <option>Work</option>
//               <option>Colab</option>
//               <option></option>
//               <option>None of the above</option>
//             </select>
//           </div>
//         </div>

//         <div className="sm:col-span-6">
//           <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
//             Street address
//           </label>
//           <div className="mt-1">
//             <input type="text" name="street_address" id="street_address" autocomplete="street-address" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
//           </div>
//         </div>

//         <div className="sm:col-span-2">
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <div className="mt-1">
//             <input type="text" name="city" id="city" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
//           </div>
//         </div>

//         <div className="sm:col-span-2">
//           <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//             State / Province
//           </label>
//           <div className="mt-1">
//             <input type="text" name="state" id="state" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
//           </div>
//         </div>

//         <div className="sm:col-span-2">
//           <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
//             ZIP / Postal
//           </label>
//           <div className="mt-1">
//             <input type="text" name="zip" id="zip" autocomplete="postal-code" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="pt-8">
//       <div>
//         <h3 className="text-lg leading-6 font-medium text-gray-900">
//           Notifications
//         </h3>
//         <p className="mt-1 text-sm text-gray-500">
//           We'll always let you know about important changes, but you pick what else you want to hear about.
//         </p>
//       </div>
//       <div className="mt-6">
//         <fieldset>
//           <legend className="text-base font-medium text-gray-900">
//             By Email
//           </legend>
//           <div className="mt-4 space-y-4">
//             <div className="relative flex items-start">
//               <div className="flex items-center h-5">
//                 <input id="comments" name="comments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
//               </div>
//               <div className="ml-3 text-sm">
//                 <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
//                 <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//               </div>
//             </div>
//             <div className="relative flex items-start">
//               <div className="flex items-center h-5">
//                 <input id="candidates" name="candidates" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
//               </div>
//               <div className="ml-3 text-sm">
//                 <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
//                 <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//               </div>
//             </div>
//             <div className="relative flex items-start">
//               <div className="flex items-center h-5">
//                 <input id="offers" name="offers" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
//               </div>
//               <div className="ml-3 text-sm">
//                 <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
//                 <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//               </div>
//             </div>
//           </div>
//         </fieldset>
//         <fieldset className="mt-6">
//           <div>
//             <legend className="text-base font-medium text-gray-900">
//               Push Notifications
//             </legend>
//             <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
//           </div>
//           <div className="mt-4 space-y-4">
//             <div className="flex items-center">
//               <input id="push_everything" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
//               <label htmlFor="push_everything" className="ml-3 block text-sm font-medium text-gray-700">
//                 Everything
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input id="push_email" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
//               <label htmlFor="push_email" className="ml-3 block text-sm font-medium text-gray-700">
//                 Same as email
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input id="push_nothing" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
//               <label htmlFor="push_nothing" className="ml-3 block text-sm font-medium text-gray-700">
//                 No push notifications
//               </label>
//             </div>
//           </div>
//         </fieldset>
//       </div>
//     </div>
//   </div>

//   <div className="pt-5">
//     <div className="flex justify-end">
//       <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         Cancel
//       </button>
//       <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         Save
//       </button>
//     </div>
//   </div>
// </form>
//   )
// }

// export default Contact