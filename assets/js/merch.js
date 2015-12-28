var shop_iwin;
var shop_url = '';
var shop_extra_get_params = '';
var shop_anchor = 'dizzyjam-merch';
var shop_hash = '';
var shop_frame = '//www.dizzyjam.com/embed/arcadian/';

if(getParameterByName('sid')) {
  shop_extra_get_params += '?sid=' + getParameterByName('sid');
} else {
  shop_extra_get_params += '?sid=54f7a6a6a840befcde03b014531ff9ac';
}
if(getParameterByName('token')) {
  shop_extra_get_params += '&token=' + getParameterByName('token');
}
if(getParameterByName('PayerID')) {
  shop_extra_get_params += '&PayerID=' + getParameterByName('PayerID');
}

if(location.hash.replace(/(.*)#/, '').match(/dizzyjam-merch-cancel/)) {
  shop_url = 'error/';
  shop_anchor = 'dizzyjam-merch-cancel';
  if (history.pushState) {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
}

if(location.hash.replace(/(.*)#/, '').match(/dizzyjam-merch-confirmation/)) {
  shop_url = 'confirmation/';
  shop_anchor = 'dizzyjam-merch-confirmation';
  if (history.pushState) {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
}

document.write('<div id="dj-loading"><center><img src="data:image/gif;base64,R0lGODlhQABAAPUzAAQCBISChMTCxOTi5GRmZJSSlNTS1LSytPTy9HR2dDQyNIyKjMzKzKyqrOzq7GxubJyanNza3FxaXLy6vPz6/Hx+fDw+PBwaHISGhMTGxKSmpOTm5GxqbJSWlNTW1FRWVLS2tPT29Hx6fDQ2NIyOjMzOzExOTKyurOzu7HRydJyenNze3Ly+vPz+/CQiJERGRExKTCwuLFRSVDw6PBweHKSipFxeXGRiZCwqLERCRAwKDAwODCQmJBQWFBQSFAQGBCH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCQAzACwAAAAAQABAAAAG/8CZcEgsGo/CCYHDQjqf0KgzY6qaDNKsdluAWSHbsPi48HoL43QxEnh0EM6yueN0pCwSjxoZeiw5aEgYVjB0SAQKiS8he0YeHH8EWGSEhkYTiol6jUR2kRUUlHNHISaZIyicRTWfE6JVlkQQpwuqa5CRcEVysEYOFqe6tkMguEs1RryFybTDRRQirbuVazEjmaHORAzGBIFDyt8zLTanGdrJ3QyyZibiB6cJjRQrwqSRS9kzg6NCCC/BnmxgwAjJigUVAhwoeIRVJBDEFnSYeADcNUXibl3YOClZwo8Z9HVK8UmkL1PYSHVwsXEjDEEfPxaIcETJEoJRKByAkehEzf8RLYMiqREzZg0HzxSahIJgUIs1H4IGJcBHRZuiCUGItLeF4TgRUqemmkLiqoiiJZ6qojAr7MYRTXIKMEsXwlIxKCy43fimawOsFSqq4uD2wVi8EIzeHZM36ItNe0ogDFDCmYq3Pm3pLLA4TYgRJLxqRicanenTqLMMyCCgtevXrk8XwEf75gwDE3PrhsCbt4DTEgAIH06cuAoNvZMrpwi8uPPhMZDvPr58nWkCz5/HwL28++/r2Z2ruM2aRXnz6GObJlGbtqvU8OPL90eatAcWajWziNAZ74QDCzmzAoD7cYJCaycQ2J9fBALIlRYhlNAggZA1IuGEBxhQ2hP0YJjsoIMGoudhPVIM5CEIIJC4VgQonohUHQycmOJWnnViwIceLnYehof5s9+Cz0iYn484TjhUjkcM6OCQfKwG4ApJ/tfih0iIiKKKz0wJIowT3tUCi0VWdWVnF35IkxARlGDAmlCiOWGFQVJYBwobDoEAj0OUmaGdWmrFIZ0WvrmNkXlqaR1qGwg6qJk2FrkBai1I2WKP5MnZCZ6mgdliZWs02FGhnpoWAqaLPulLn3VGpminjDqyqn5dRrkpKZJuCaulrraaK65raTkFoTXhCGQYDqCXqp6c0orig/MhO18azj7rn67SbjGgAI9qEwQAIfkEBQkAMAAsAAAAAEAAMgAABv9AmHBILBqPQkGlwkA6n9Co00CoEiLSrHarshI027D4CPHWxujioBNohJxlzu3rRAVkD2waiVlWwEhxVWd8JoYSFHtGKwF+TIFmSBmHhnqKQ3aOBZBWhEY3hi+GCJdFJ42oGWSRRhqUJpulRAioqG+mrEUfr7JGSrUHrblDC6/BvUUktRUOuJ1qrzfIi5oqznOeQimhldOtyx5EghzZE9ywlxtQG8sk4rkhErzrTxsqEBACTwfVQxP4NfINqXEum5oKChKGIwOwQw0DLfgsi0LgFSkjFCBYSDhCgY1ADkPiG3Akgx8DWSaAMjGhpAmOMCU1vAfworgJt7KEKJCCGsz/jgkTIAlxQORMVbNK0QL60+M6DTMbLpTlqmlClilpagUo64PVhBoSbWERVWApEVYxpNlQtCGyFzA/pgtolipQFsgyuJmGzlvEaWK9CR5MOIwDAyUQK07MGPHgOAlSRJ4sWbKqFQdOgMjMuXPmEoM5XOgxmnTp0xc0TPCsuXXnqdNEmEY9e/QLsptZe4aNTDbt3y8w63b9OfTv2qMbwNjgobHzxY8pS6esr7D169izax+DwEWAnNvDdAAAgIby8FtQ0CBP3gJK9FIIsJ9/BX49HPPzu7M/lISP/Oy5AAJ/Q8kHYHsoEOjSgQB8oGAg6wH4YH86zDfChHXYwF4TGE4hBQB4MAQBACH5BAUJAC8ALAQAAAA8ADwAAAb/wJdwSCwai6VCx3BsOp/QpydQqa6i2Kz2VK2CtOCwsUGlHsTo4aahmjzJ3XMTUXgErulirQOBfJtwXk4LBIUpeUQDfXwQeGNdFXJGJYaFjnl0i34tR4GRRxQJHDeGKIhDLJqNnZCSRAeVNxqnaiqqrGWuQigPsbRESYx+j3FjsQK/r7d6rUixFcmJqn+ozUQYx9HKwpeergKxHWkoIU8O069ln0OilQ5QHhRFKCAHB0xOAqolqA32/qhGCWzgBAUJEzAkRHj1z94laao4FRQRq1ynDwkRHurX0OERA4wiSIRHkQOySTcQqkTI8ES9l/eMtPAnD8yeSSJWrlyABKbL/38ektXcBUFnRhMBPk7oCHOANlhGNTKQ4rPjSEwEoiI8gSVECaYg8NFaELUAAjD0fEZDYGPnQy0DXjqNdkAqLQ8stAkhQFCv37+AAwsenEUDBnWIDy+YSrhJBQWQI0uWTK3xtckjMGf+YNkIBs2aJXQu8jizadBcRw8xrBhSaxIZVMueTbv2nBEFbENRcaHHCF26dyno0fuCjKDB2RFf3juBqeAoLBRn3htC8hcQeExnbiHv7LNqEtDYXvyGarYjUFJfTsAyBd4AAFgfM4I8jsYhXMTfD96zi+kmWJbAfvElMFFx/ODXG4ELFRTbaCoQCIAM1xExHIGVJZeBhDwMdSrdBxKKU+ELA/wg4TsjViAhByOSSMOJLTYgIWMjWkCgRSNuAMMPCtAYRRAAIfkEBQkAOgAsDgAAADIAQAAABv9AnXBILOo8jUbEyGw6n8UBpDPdQK/YJms6zWS/3wkXIgBnHSwQg+IUc8tOTaBjPYMOeK92DGeqKgGAX2h5B3VGW29NHoCNA3Ynd3h7ikYhJI0iAQhhkpErTIlUfUQsgacgZniReGxFbl1MGJkYIWYRhQcliHyItAxmOi1iniivvUW0BcFCG7l6Q6JkRRC/zEIZz6XI2MrXzc8t0dw6mJlQKEtPBqx3HkPs2RPv3acVE09/BCmgTRSeka6Ya+QqygQO+/YtWLfqEJQS5nb5SngDYYqH9AYdgGCJBEWKHJ8UNGNrCAINFiuC5PQti6mPKQ20/FIBpkp8M79AsFkjJ8n/BCAf+VRlEdjQYBREHDjKtKnTp1BbbixAtapVqhKjLjDBtatXryyiloNBtqxZrw/EdvjKtmxarWfjlg0b9QSVu1eryhTLt6/fv0NMqBgJOJoCBSZwFm724vBhAuoKY3A8wjGGwghkUK7sWENhDRY4b5YBze/kzZwvPk0Aw0gEAqIpi2jaYMSFC54RmUBtgemM28D9qZgh2gazrQ8sDgkA/HaAJxU4ZwQjAYB1AARMxmhO40rWYNWvZx+igbtxqOGtjw/Mna7T9Nhfce/9FP76IQS4q6h/PX4UGtwZ05R9snCXwHv93UfEds0JeBSBobQ3YIJOmNAcguI54cAHNLzwGN1QEC6mgw0UiqhDA/0pJmIHOMTQU1NBAAAh+QQFCQA0ACwOAAAAMgBAAAAG/0CacEgs0gYs1sDIbDqfxc1henBAr9hmiXowZL/fLdULLj8ZXDIzBFKdrGaoeKo2HiD4Wlye1nbyEBt7TmhjTRqAgYNafUYliRmLjCB0RghugJKTlUUTf58emkxzJ3VHiQ0too6NQyeJS6udraefHROyrCeUdYi2KE8IK4MrDAYlxkMMtioMTwcVAQuCsr55IWsCGNHRELm1HaGOBdzl30JJljXl5Q3nQhREbOzt2O9EGQv00gXi9/DkpNGL9K/TvgMFm5AQWEFPQi3cTD0sQkLAxIsYM2rEV6Ojx48eIyRUQaCkyZMnCd7TgLKlyQAFWd5wOfNlTJotVb7zBLJnA/9/G4MKHcqEQCqiB2CYuKFTow0TSpcO01gAqlWoHZxe3YoQY9KtUQk4u4Jgjz2AYKMGKOuEAo4EZ7GEwGDDkoioWxc8IQEAgAsNWZIqUNDVYNq2O/r2jRHviYnBIwbHJdJAxtUUTjgo7gtTSAcOIkQYHVIA8uACbUlEFTlqs9+zHC7IvpCAyIvIuKc2cSDRtmvAQ2LPru0Kd2TicRq4zlGEwGzazU0TjhPChesS0YdHMa5ARhwMrgkYca6dInd3YDbocA2HiHDZyG1LL3PDNYmiz+MXN603ywrXLjTWXH5NPGZaGL81QR58WkgHVDCJ9fVCZgQqaBwYAsQAwAfAKFgb4RoPzCDBg6K8B11QD3yo0QHPsTCUCrcBl0sQACH5BAUJADEALAQABAA8ADwAAAb/wJhwSCwaj8giAyRAJZ/QqDRzOFVb0qwWuql6nduwmDKxmsXorYfpLaXfXDbISoHbj8v26s4forxnfX0scgcbgnwrgCcMiHdkhQhcjnGAHkkILBCbDpRIhHqfKpuknkctA2Uge0aKpK+mSQYsrVWvHaMTsVoCt7ikdbtPqKO/xg0DwlENvqSXysvHuE3QWRrHndVZHs7aYRolWN7j5OXmglSL6qvnJxUB7/Dx8xUG5gf08vrx9/n78RD6+RNBz025dGbWGTrHkFywhkgQiMDxsI8IEBXH1OgBAIAKRCwIEBBhUAyDER07ugghSIRIkSSSadlgI6XNBH1qvLzBgacG/0lcMOiwaVMByzsVdirVleSEC6I2O4BMofRlvVY5oKZ8ANSRzp5gXxY4KuSFVgAwnhGxEEBMhxRHFlSFSeQHVB4g4va4MONElpAwTDBV4rLqWqIkMgpBwePCXr7iIhIIbCJw07AjibDY0ZFAtiMJHIsuMKQGQQwXS1emXOOJCrCs/LA4JEv03hEPE4xQwBuDHwmrA9OWleaD7Qt5h0zcPcL3kAmUK7eldOD4hyLLe2OPntYRhRHH1QrJrsD5EA/BTXDw+tgxTuy8tW+PfgBRY9tgiJA3/5t7y/YXBGSEbvHxp1p0Ut0xwHEWILEfEjek19UbAgBIC2jMlfcJdxE8ci5fDzYkUUF8GjoY3SA5uEDAEw+KKMMDHWrTIkT6kbgAjUqQmAGORTTwwQfJIRIEACH5BAkJADUALAAADgBAADIAAAb/wJpwSCwaj8ikshZCLZ/QqDJUOlgR0qw2GbF6BdvwdsPynrzi9BORMZsZ6vjR4D6fM/K8cDWpex16chRldm4rgXoMfgaIiH0gf42IfFeSkiwelpqbnJ2eRyAPBKOkpaMQmlUCZautrhs1BQCztLW1BKkQHbq8vbwRLrbCtCK5vse7JzTDw8WWAsjRssy2uM/Su9mZBxym3gQdqayu46uwn+jp6utPGBaNFCRggQ0KFxcajhUVBYxxJTDu3RtBIRCJfftUAArj4IHAhxX0cAuAkOKBEFoKuHj48EWeEAUqUhwJBwqIGRwfasD4kQGGkTD5RVjyIaXACiz3SIxZMR8S/wk2L3w4RCTEhwJbNGAw4kAFz4RIaKQcwQJUjBEyQETJIGLUvCIGDopcgMQCxw45i1gYoaDth4JKupZKIiAmKqv3Epw74q4tWxVDTizIplXICVMNkiAQTHHvnCUe2Eo2QWSBicsmkA5JYGohEhQr4KbhIJlt1SGWMWsWIqAbqbubWPhlaw01ZhjhhsTrzMnE7BEzK9/OPSSC61EBNqn4vbRI6svEUZv6Omltab7DjxwfhaVRgN8+ncNQDQpxow2/ZSBxR56pXFKNGPzGg308biQMeCOyPuJBkuf3rVeKaIl8MEMCcWX3WUjJsSMEgNE5uAQJCkr4hAC3lWDhVt2chgJIEAAh+QQFCQAuACwAAA4AQAAyAAAG/0CXUIjIDIbIYRF0aE5aw5ITZFAyp4hkMoSiaKM+AIDg+Aqlp2skWjK0V+ypx+wKoUHZL07MJ3m1FFdpLFB0gVN4XxQRiAJmP3x8OCBfK04DhXR1A2qVLIhpZjCRkTBrSIEef5qobplEGaBMDGYbFqSRKXlErIatsrMhmg00uHwQr72aLZbAhMohAZDGCsLKyxPOK8msGzbGBNe9d4IG1uJRI5E05+iKgk0o7oA1PWIq85rNLBv5tSI42vlDxW/VQEAHzXBLyLChw4fXWFRIkYCixYoYa0BEEuGNm48ezblQcaGkyZMnRWyM4gzRgBEoY5rEsPLMoJZNYMqMSbOmAf+cUyD02IlSpc+bSOEdkYixqVONPkFKDVmzqtWr4gw6XJgwmgytXTWUADsQxAsFIw5ANNABgliGBmygRWuCbL4QGtzqLXO3woi5cws4FNBWb1sBAllRUGEBMGAJiefhNVzYrchxJhz//XuCq2S2lCsfMcRBc+B2kaERDG3YbunNj+Gg4qDCrsIDyLbgVlFZrxnYc01k+HLCBAwCiHstIhGgQolKeXvj+/IBuIaFKCTAMH7cdp0CE8OTXU7ZTIkcaDHIM9OB+3YNUQyziBJ+4gRDLPbi70dnhYzt25ExBAQEFEibEgvUFwBfCm3gnTIiAGicIwMaSABUZzQXHnxXZSCLIQxGVWgght8pKFtNFBDw4YlCEDjiFgoW8GBZH3aghYsFktiihs3RslJ27n2wi4g5AsJjc6kdREKQJxBnoY4Z1qcWRA58yAFZOF6oCHP1DQlXkD7e+OQ/PI621QcABkBHllAO2OVGccmg3ppj3hZAB/xh5eSLeg6kAgd89plPCRZWIag/hAVAIURBAAAh+QQJCQAyACwAAAQAPwA8AAAG/0CZcEgsCmK6D6rIbDqf0KgMtQNYYdKsdjtkWb8HJ+MEOoBK3PRz9bXiQs2SmQydh9VRWxtAepZPfnYGeFAbOnsOTmR3dYRSGHsEimZxdo5SIS57aEyLgYyXfns5TXOlfweJoVA5ew1Fi2dEA12ylwwbUCV7LnBElJ2WjgwuFxcJS04cexhGg5OhFsbTHS1NDlVfMRRZsY1RNNPTFixNJG4a3N1mK3WxIE0S4uI27UU4Kb5bcpPvrPPiAhRJpkZdMGBSTowAOC3dqn7wtpAIx/DFQxks7AgzmOUBwwQXhbw7UILjvhfzQv66qAHJBQ0qZ10MgcGCyVUTPFiLybOnz/+fQLNkWIAhQNGjRpO+6rnCQAmnUJ9KFamgqtWrV5sFDWQC6wivVQsAZURW5IGuYL2KZRpRZC07ab/GkLvgJ8KyGOEJIIq0b9GlbKVGjapqq+HDiBMnlBSTRYSQLGzAMFEu5Io5tG6lmDz5RkgKqEgiwINigQnOp02ouGhAI5lnWzR8QI36wU08GV2zu23kRmraEto+vKybHZQKwDmvfmiydfEMTgIkNxEgM5EKgLiAzj4rw8gyDOIlD9+JAAERDHZG8aABQofHTDZM+C4e9YnbCB5wMH8+Cmj3AOpDRAsRhCZAHLOpVgd/+7UlQAN/kJcXgO89EYIcxl1jQGHXMNidXxcVKPVLByqQCAFB16CgHh4keCghRiEaBQp7FE4AVAke9jFijKDASKF1PIngIZAw8jgQhSSuCFmOncQYQI8YIelBT/oxWIqTUCJQoonLqVSDi1cayUQJUsbEZJghQikSkgKG4gGYaIqg5hRsqlTlDWvFOaePJMYUQQAcdLCgiE6EAIIK9ykmEpaKxpYUdo1qYYCT8EUqBQMkchJSEAAh+QQFCQAwACwAAAAAQABAAAAG/0CYcEgsGo9CCA+nQTqf0KjzAKgCWNKsdmuzAh7bsPgo8RLG6GIm5yKgnGXrGUnJgATv9BGBu/htcGZTB4QgLXpGAn6LIEhxVXNGG4WEeYhDA4t+FhRkgkZ1lIaXRQ+aFx2eckcRoiWkRRsup5ZDj1+goqOwRCSnCUYfn0QlrryxI6cGpcNCKLqHx0Qgpx9FwqtDLQKiDtLBpydEXdnOxnohBhtPBqcjIbbDoZQITyEonUglbCMYtaWnSAxZ8IEAhw+phHg4t6dYJUcKIkbUkA+ZJk72JnRreIcSkhESJcrIcKQDo2j2VrA4AWIFq5W6IIKcGfHBAGQV4GnZhieWHf9dBxjQIUAzZL96mNCghJEOaCGd+kwYFXliKTqVTll4ixJCxYyiIqGmmcfSlVUoGypM7QfLoVk0BmzQNCEWXcenl0C8mHgMq1ZeXT9UJMVzMCzDhL8pXsx4DAMIBSJLnhy5keIVBkpk3qy5szoYB0yIHk2adMJvDLJ2u1G69egai92WBTF7NusXrnHrhn1Zta7crSHErp1VIWTKyA/E5szc89bG0KNLZ/rt7KUQB3IeqxMBcZoMCQyS5OV3HaIVBA9yEOF9DNk7SMU8u2GwPoEGbYGWaE8HhPr/BgVQl3swEdcSf8SIYN+CPRHWyl204eUEAiQsaB9FRCBoT4YGqNbwXgEW0leAedp0MIGGRXBn1TPFkWFhBcskUkEFI1qX4gARuiRJgbMhEQCD3oWAQQAz0ojge7vcGGEh+jxgUA3/TEPklAIMUcxPMcKw0GweTOhWlNp0Z0+RIhBZ0UrHVWkOhPHtgQ8iKkxJZJagHWciMQzFJieNanSQJoe1kVgdCWRql6Cfd2b4lmIC7Klcn3FCoCaeS+ooDYWFDogmZOMpupE0JxTa6aF+TkppjpfuWYB3myaaokazDagHenJ2eUSrphIxCT3bDTkjb7ci6moisUpDawNtQsqpl/BNRyyiozqrBa7SyiesoNVmsWUE3wQBACH5BAUJAC8ALAAAAAA/AEAAAAb/wJdwSCwaj0KNxXJAOp/QKHJyqV4y0qxW++hZK9uw2MixXhLjNLH0sSQQToIZjdyYdAqGGrlUKFJxc04WAIU9IXtFDH6MAkhlX1OGhXqJQxuMfjKPNJFGITSTABuWRAGZChpHkF50RQGiBKVEDn2Mq4JFGzqiDrNEKqgYZF6tZKIdv0UmqBFFcp5DGaIuyoojmbJErDSuQgqiINbP2I3buUmiJokeKE8RqCYUQ9DGQgg9vWoeEiYmHXCQYEClYkgHAiISECgoRESsPRz8SWzCJxsUUPqOOIsisSOHSkWUKDAhLgoFFaEAQEhUoWPHAJ8+kAiDgMAIKCAOUKwjwmVH/wiILqUJiDOKgH4+/U2Y9yunTqcnSpqsISOpiQdM94Rg8bRryawmFyQtMIuBV6lpUrgEawlqqQk3lCoboHMuBA7W2I5Tpnev37+AjRjQUKOw4cOFWQQ2ipCA48eQHavaW+Ks5QMJI3PQvNCvgSTSpEU9kfkG582SA0td3fW05sl7L599MRix7RqOKJcwsLs3798GSC0eTry4cZMTyB4PU4JEhQqfrUUdwO5ugOczm3odSvo69gATtI+eHjSLAAzf0/elKToqc+fe4y8AWWoF1KdZaqT/jla6bCT67VdBDb7Q0gAWpSCQwXjbGSEfdhsp0gEEGkRoFE4M9mdQerkdoaYChSC2gKF7TogImhMDoDcgUYKBOGEJl/i2QkgkWjIAix66qIGJtHUVXXs1PsHjGAfoOCOQB/wITE6BraBjf2Y9peRxhLnozhrjTfmChpQ92aKUXwIWgo4MKeLjEU79xYKXX+ak5WIIkDkkkm9ScJ81KVo5RZZG7TTLhyA6URmYewY5ywYNqLCUoGcy2uFxUbq5nBaD6uTBpFkgOlqBmEZhHwvUKRMEACH5BAUJAD8ALAAAAABAAD0AAAb/wJ9wSCwaj8KT7DNBOp/QqFOgqI4Y0qx2WxlZF9uw+CiyjjDjdNHwkKGd5Zj3fXTYXK+SGhn6wEwwAXBeVXRGMhc9FzF7RwZ/kFhkZoZEB4qJF3qNRYCeHEgJhAqVQyOZig6cRQWQfyeTX5OoIquHrh8IRnFzRy6oPCi2RQ2egB27lLvAKsO3ritFvKRrmIoWFM5rxia1RNOVMMAC2rvc5EPglsA3nBFQK9zt6aOGMcDRTgMZIfoPHAQ0POmAq8GQGgkwKDQoBAOwUkM22ABAUdIuAhhvPGhSxw8kUFBmWIvRz0iIBTooUhwRKmPGCgaOHPhzA12UBqdoCDRySaVP/yQFXLosoIpICA4QwhyFYeSRT58f4Ah1yTDiKjtPoQqbIkLj1BQCWtiiQMJH1pUgsoAA+DVAyT0ocJyluOCtFBQqvu7kJOEsgQ1pViwYahduIpUWNu3JkAKjzVUdKOocFuKAN8ou3JbbXHiz58+gn0QAcaC06dOmQ0thXKF1ANewWx9QHYVE7Ne3K7D4fAJ179+kSxfInXs3aN+ph7AmDnv25hLAo6MWMhq5b88rDJTQzn27dw9FaYsfr01s+ecazJMPE0EFBAgeypUG3MjBifcd3lOeUJpTZfz5vZeBLQZId0AJ2WwBHYAMXnVQcGKsoAGDAEagnjsPbvEfhe7x45qZdQd2lgSHEICwlSXxXZWBc8H15gSJ+axh2gDaTIdEAwHmZ8CFQ1DQYn/OnKaPex14iESBwL1TYxQUbCBiRL4l+MOCQKoRnhorJkkEA0ISQ94GqA24ZZfr9cgfcE2xKJN41QUXk4y/OSJelGlCaBJt0J0W45hulvlDZTbe6KKgn9mn5xQzPjFoeT9CEaeji+4HgkWI+skeaEEAADs="/><br><br>Shop items are loading now. Please hang on...</center></div> ');
document.write('<iframe id="' + shop_anchor + '" src="//www.dizzyjam.com/embed/' + shop_url + 'arcadian/' + shop_extra_get_params + '/" onload="init();"  width="100%" styles="width: 100%" height="1" border="0" frameborder="0" scrolling="no" allowtransparency="true"><p>Your browser does not support iframes.</p></iframe> ');


function receiveMessage(event) {
  if(event.data.match(/setHeight:/ig)) {
    document.getElementById(shop_anchor).height = event.data.replace(/\D*/, '');
  }
  if(event.data.match(/getLocation:/ig)) {
    shop_iwin.postMessage('setLocation:' + document.location.toString().replace(/#(.*)/, ''), "*");
  }

  return;
}

// For IE 7 and other not modern browsers
function checkForMessages() {
  if(location.hash != shop_hash) {
    shop_hash = location.hash;
    if(location.hash.replace(/(.*)#/, '').match(/setHeight\|/)) {
      var data = location.hash.split('|');

      document.getElementById('dizzyjam-iframe').height = data[1].replace(/\D*/, '');
    }
  }
  location.hash = shop_hash = '#dizzyjam-iframe';
}

// On resize we should send a message to he embed shop to change its height
function windowResized() {
  sendPostMessageForGetHeight();
}

if (window.addEventListener) {  // all browsers except IE before version 9
  window.addEventListener ("message", receiveMessage, false);
  window.addEventListener ("resize", windowResized, false);
} else {
  if (window.attachEvent) {   // IE before version 9
    window.attachEvent("onmessage", receiveMessage); // Internet Explorer from version 8
    window.attachEvent("onresize", windowResized);
  }
}

function sendPostMessageForGetHeight() {
  try {
    shop_iwin.postMessage('getHeight', "*");
  } catch(err) {
      console.log("Error 3");
    // Browser not supporting postMessage method
    if(shop_frame) {
      shop_iwin.location = shop_frame + '#getHeight|' + document.location.toString().replace(/#(.*)/, '');
      shop_frame = false;
    }
  }
}

function init() {
  try {
      document.getElementById('dj-loading').remove();
  } catch(e) {
      var elem = document.getElementById('dj-loading');
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
  }

  // Get the iframe to which we should send postMessages
  if(navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") === -1) {
    shop_iwin = frames[shop_anchor];
  } else {
    shop_iwin = window.frames[0];
  }

  sendPostMessageForGetHeight();
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}