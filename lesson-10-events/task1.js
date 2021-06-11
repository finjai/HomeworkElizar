'use strict';

function dynamicForm(array, nameForm) {

    var myForm = document.forms[nameForm];
    var field = "<table>";

    for (var i = 0; i < array.length; i++) {

        switch(array[i].type) {

            case "text":
                field += "<tr><td><label>" + array[i].label + "</label></td>";

                if (array[i].width) {
                    field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
                } else {
                    field += "<td><input type='" + array[i].type + "'</td></tr>";
                }

                break;

            case "url":
                field += "<tr><td><label>" + array[i].label + "</label></td>";

                if (array[i].width) {
                    field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
                } else {
                    field += "<td><input type='" + array[i].type + "'</td></tr>";
                }

                break;

            case "date":
                field += "<tr><td><label>" + array[i].label + "</label></td>";

                if (array[i].width) {
                    field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
                } else {
                    field += "<td><input type='" + array[i].type + "'</td></tr>";
                }

                break;

            case "number":
                field += "<tr><td><label>" + array[i].label + "</label></td>";

                if (array[i].width) {
                    field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
                } else {
                    field += "<td><input type='" + array[i].type + "'</td></tr>";
                }

                break;

            case "email":
                field += "<tr><td><label>" + array[i].label + "</label></td>";

                if (array[i].width) {
                    field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
                } else {
                    field += "<td><input type='" + array[i].type + "'</td></tr>";
                }

                break;

            case "select":
                field += "<tr><td><label>" + array[i].label + "</label></td>";
                field += "<td><select>"

                var keys = Object.keys(array[i].option);

                keys.forEach(function(val, ind, arr) {
                    var temporary;

                    if (ind === (arr.length - 1)) {
                        temporary = "<option selected>" + arr[ind] + "</option>";
                    } else {
                        temporary = "<option>" + arr[ind] + "</option>";
                    }

                    field += temporary;
                });

                field += "</select></td></tr>";
                break;

            case "radio":
                field += "<tr><td><label>" + array[i].label + "</label></td>";
                field += "<td>";

                var keys = Object.keys(array[i].radioLabel);

                keys.forEach(function(val, ind, arr) {
                    var temporary = "<input type='" + array[i].type + "'>" + arr[ind];
                    field += temporary;
                });
                field += "</td></tr>";
                break;

            case "checkbox":
                field += "<tr><td><label>" + array[i].label + "</label></td>";
                field += "<td><input type='" + array[i].type + "' checked></td></tr>";
                break;

            case "textarea":
                field += "<tr><td colspan='2'><label>" + array[i].label + "</label><br>";

                if (array[i].width) {
                    if (array[i].height) {
                        field += "<textarea style='width:" + array[i].width + "px; height:" + array[i].height + "px'>" + "</textarea></td></tr>";
                    } else {
                        field += "<textarea style='width:" + array[i].width + "px'>" + "</textarea></td></tr>";
                    }

                } else {
                    field += "<textarea>" + "</textarea></td></tr>";
                }

                break;

            case "submit":
                field += "<tr><td><input type='" + array[i].type + "' value='" + array[i].label + "'></td></tr>";
                break;

            default:
                field += "<br><label>" + array[i] + "</label><br><br>";
        }
    }

    field += "</table>";
    myForm.innerHTML = field;
}

dynamicForm([﻿{type: "text", label:"Разработчики:", width: 300},
{type:"text", label:"Название сайта:", width: 300},
{type:"url", label:"URL сайта:", width: 250},
{type:"date", label:"Дата запуска сайта:", width: 150},
{type:"number" ,label:"Посетителей в сутки:", width: 150},
{type:"email", label:"E-mail для связи:", width: 200},
{type:"select",label:"Рубрика каталога:", option: {здоровье: true, домашний уют: true, бытовая техника: true}},
{type:"radio",label:"Размещение:", radioLabel:{бесплатное: true, платное: true, VIP:true}},
{type:"checkbox",label:"Разрешить отзывы:"},
{type:"textarea",label:"Описание сайта:", width: 500, height: 200},
{type:"submit",label:"Опубликовать"}], nameForm);