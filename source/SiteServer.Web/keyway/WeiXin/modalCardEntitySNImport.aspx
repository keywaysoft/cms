<%@ Page Language="C#" ValidateRequest="false" Inherits="SiteServer.BackgroundPages.WeiXin.ModalCardEntitySnImport" Trace="false" %>
<%@ Register TagPrefix="bairong" Namespace="SiteServer.BackgroundPages.Controls" Assembly="SiteServer.BackgroundPages" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!--#include file="../inc/header.aspx"-->
</head>

<body>
    <!--#include file="../inc/openWindow.html"-->
    <form class="form-inline" runat="server">
        <asp:Button id="BtnSubmit" UseSubmitBehavior="false" OnClick="Submit_OnClick" runat="server" Style="display: none" />
        <bairong:Alerts runat="server"></bairong:Alerts>

        <link href="css/emotion.css" rel="stylesheet">

        <table class="table table-noborder">
            <tr>
                <td width="120">选择上传文件：</td>
                <td>
                    <input type="file" id="hifUpload" size="45" runat="server" />
                </td>
            </tr>
        </table>

    </form>
</body>
</html>

