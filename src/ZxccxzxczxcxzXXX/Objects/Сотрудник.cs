﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ZxccxzxczxcxzXXX
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "Id as \'Id\'",
            "Имя as \'Имя\'",
            "Фамилия as \'Фамилия\'",
            "Отчество as \'Отчество\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("СотрудникE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникL", new string[] {
            "Id as \'Id\'",
            "Имя as \'Имя\'",
            "Фамилия as \'Фамилия\'",
            "Отчество as \'Отчество\'",
            "Должность.Наименование as \'Наименование\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private int fId;
        
        private string fИмя;
        
        private string fФамилия;
        
        private string fОтчество;
        
        private IIS.ZxccxzxczxcxzXXX.Должность fДолжность;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// Id.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Id CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Id CustomAttributes)
        public virtual int Id
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Id Get start)

                // *** End programmer edit section *** (Сотрудник.Id Get start)
                int result = this.fId;
                // *** Start programmer edit section *** (Сотрудник.Id Get end)

                // *** End programmer edit section *** (Сотрудник.Id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Id Set start)

                // *** End programmer edit section *** (Сотрудник.Id Set start)
                this.fId = value;
                // *** Start programmer edit section *** (Сотрудник.Id Set end)

                // *** End programmer edit section *** (Сотрудник.Id Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Имя Get start)

                // *** End programmer edit section *** (Сотрудник.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудник.Имя Get end)

                // *** End programmer edit section *** (Сотрудник.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Имя Set start)

                // *** End programmer edit section *** (Сотрудник.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудник.Имя Set end)

                // *** End programmer edit section *** (Сотрудник.Имя Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Отчество Get start)

                // *** End programmer edit section *** (Сотрудник.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудник.Отчество Get end)

                // *** End programmer edit section *** (Сотрудник.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Отчество Set start)

                // *** End programmer edit section *** (Сотрудник.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудник.Отчество Set end)

                // *** End programmer edit section *** (Сотрудник.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.ZxccxzxczxcxzXXX.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Должность Get start)

                // *** End programmer edit section *** (Сотрудник.Должность Get start)
                IIS.ZxccxzxczxcxzXXX.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудник.Должность Get end)

                // *** End programmer edit section *** (Сотрудник.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Должность Set start)

                // *** End programmer edit section *** (Сотрудник.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудник.Должность Set end)

                // *** End programmer edit section *** (Сотрудник.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.ZxccxzxczxcxzXXX.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.ZxccxzxczxcxzXXX.Сотрудник));
                }
            }
        }
    }
}
