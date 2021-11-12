<h1>Curso Angular Alura</h1>

<h2>Projeto alurapic</h2

<ul>
  <li>ng new alurapic - Inicia uma nova aplicação angular chamada alurapic</li>
  <li>ng serve -o - Inicia a aplicação no browser local</li>
  <li>ng serve --host ip - Inicia a aplicação podendo ser acessada por outro dispositivo remoto</li>
</ul>

<h2>Data Binding (ou interpolação)</h2>

Nos permite indicar por meio de variáveis que guardarão valores no <em>app.component.ts</em> para que possamos recuperá-los pelo <em>app.component.html</em> (Template) utilizando

<code>{{ title }}</code> - double curly braces (Aqui exibimos o título da aplicação que é uma variável definida dentro do <em>app.component.ts</em>).

Um data binding em um atributo ele é envolvido entre colchetes
<code><img [src]= “url” [alt]= “description”></code>


Obs. One way data binding - quando o dado sai da fonte de dados mas não faz o caminho inverso

<h2>Instalando Bootstrap</h2>

verifique se está na pasta do projeto, se sim, Rode o comando no terminal: 

<code>npm install bootstrap</code>

Depois vamos no arquivo <em>angular.json</em> vai ter uma propriedade <code>styles</code> que está dentro de <code>options</code> que por sua vez estará dentro de <code>build</code>, lá vai estar apontando para o <em>style.css</em> adicione uma virgula e cole o seguinte endereço

<code>"./node_modules/bootstrap/dist/css/bootstrap.min.css"</code>


<h2>Criando Componentes</h2>

Vamos criar um componente

<p>Dentro de <em>app</em> criamos a pasta <em>photo</em> e dentro dela criamos 2 arquivos, (<em>photo.component.ts</em> e <em>photo.component.html</em>).
</p>

No <em>photo.component.ts</em> vamos fazer o seguinte:
<ul>
<li>Criar a classe <code>PhotoComponent</code> adicionando export para que a mesma possa ser importada em outro módulo inserindo no arquivo a linha 

<code>
  export class PhotoComponent{

}
</code></li>

<li><p>Para indicar que o PhotoComponent é um componente  deve ser adicionado um decorator <code>@Component</code> com as propriedades <code>seletor: 'ap-photo', templateUrl: 'photo.component.html'</code> acima da criação da classe.</p>
  
  O mesmo deverá ficar assim: 

<code>@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
  })</li></code>
  
enquanto digita o decorator <em>@Component</em> se estiver usando o visual studio com as extensões de autocomplete do angular ele irá lhe sugerir para importar automaticamente o <em>@Component</em>, mas se não sugerir na primeira linha insira a seguinte informação

<code>import { Component } from "@angular/core";</code>

<li>Dentro da classe vamos inserir 2 propriedades

<code>
description = "Kratos";

url = “https://lh3.googleusercontent.com/CTSGfcIsnXZkBaBT3tSh3h9WcoDBgQ7ONE0Dlj8agFggFU5nbSZyXLD0_gttJagKTqsb7bhzbC8iiNcS1Bfam5CuZ00qb-ICmT52HskTgaz46IbpQgbTuA2HIeZchr9WOewD12zL325G6mlNdGlHwsbNBfoi98X_Ozc6sochFTqFvUc1WCUKy15Z2Z0wvw__pIqXvG033gOpawtNoIDimSH8xfDQJ5476joucU2KObAbltD-6jEBdp_gxKY_1A_rlD51y_SPeHXBi37ZLLAGKSPc_-fO2NXzT7iLjhKdVmnMyepDzFKjECLitfBOmRNbfU3mY7WDYcv7xULBx_QSaL_91lFG64E_kiLgMJVMT8l82YbE43nyDEb_nGZ_Tq8tXc8csn_tIW1q0l-ahJrqI3uYUHsXCnQsO902FmL3EEQTVgmWkjvtDU2t8C7A8M9QfQrsmX-hl9d6tENjWuSeYYOV5ZqBbdXajj5IrWVt6a-m0rZV8wed7qRYcGng2UQrNqGqOSH8N0Fz4EvQCQGqbUB6V_lQ_FfI91VGKEkn_XMo16d4cj6V8nrXHJmc4sCnlRs_ruSzddKYQotBXwpRTTXG6nLM8oySNxHvsOD2-29MIa3Cwi6bwpYqAyyVAWXX5PBSM0DYye2v4aTi2la9qe1-RgZZhXj4ctIwl-0J7ZPTbkSCvh4F4xP6QmUV8riZ-IcucH3CCbFRlC2D4SesISI=w724-h905-no?authuser=0";
</code>
</li>

No final o <em>photo.component.ts</em> ficará assim:

<code>import { Component } from "@angular/core";
 
@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
 
export class PhotoComponent{
description = "Kratos";

url = “https://lh3.googleusercontent.com/CTSGfcIsnXZkBaBT3tSh3h9WcoDBgQ7ONE0Dlj8agFggFU5nbSZyXLD0_gttJagKTqsb7bhzbC8iiNcS1Bfam5CuZ00qb-ICmT52HskTgaz46IbpQgbTuA2HIeZchr9WOewD12zL325G6mlNdGlHwsbNBfoi98X_Ozc6sochFTqFvUc1WCUKy15Z2Z0wvw__pIqXvG033gOpawtNoIDimSH8xfDQJ5476joucU2KObAbltD-6jEBdp_gxKY_1A_rlD51y_SPeHXBi37ZLLAGKSPc_-fO2NXzT7iLjhKdVmnMyepDzFKjECLitfBOmRNbfU3mY7WDYcv7xULBx_QSaL_91lFG64E_kiLgMJVMT8l82YbE43nyDEb_nGZ_Tq8tXc8csn_tIW1q0l-ahJrqI3uYUHsXCnQsO902FmL3EEQTVgmWkjvtDU2t8C7A8M9QfQrsmX-hl9d6tENjWuSeYYOV5ZqBbdXajj5IrWVt6a-m0rZV8wed7qRYcGng2UQrNqGqOSH8N0Fz4EvQCQGqbUB6V_lQ_FfI91VGKEkn_XMo16d4cj6V8nrXHJmc4sCnlRs_ruSzddKYQotBXwpRTTXG6nLM8oySNxHvsOD2-29MIa3Cwi6bwpYqAyyVAWXX5PBSM0DYye2v4aTi2la9qe1-RgZZhXj4ctIwl-0J7ZPTbkSCvh4F4xP6QmUV8riZ-IcucH3CCbFRlC2D4SesISI=w724-h905-no?authuser=0";

}
</code>

<li><p>Para que o nosso componente seja utilizado abrimos o <em>app.module.html</em> que até agora é o único módulo existente e adicionamos o nome do seletor como uma tag no caso:</p>

<code>\<ap-photo>\</ap-photo></code>

</li>
<li><p>Para que o <em>app.module.ts</em> reconheça o novo componente abrimos o <em>app.module.ts</em> e dentro das <em>declarations</em> vai estar somente o <em>AppComponent</em>, adicionamos uma vírgula e colocamos o nome do nosso novo componente no caso <em>PhotoComponent</em> que antes de terminar irá ser sugerido para que o mesmo seja importado se não for sugerido insira entre os imports a seguinte linha</p>

<code>import { PhotoComponent } from './photo/photo.component';</code>


<li><p>Agora vamos no <em>app.component.html</em> e vamos adicionar uma nova tag <code>&lt;ap-photo&gt;&lt/ap-photo&gt;</code> e aplicar as seguintes propriedades (<em>url e description</em>) irá ficar assim:

<code>&lt;ap-photo url="https://lh3.googleusercontent.com/CTSGfcIsnXZkBaBT3tSh3h9WcoDBgQ7ONE0Dlj8agFggFU5nbSZyXLD0_gttJagKTqsb7bhzbC8iiNcS1Bfam5CuZ00qb-ICmT52HskTgaz46IbpQgbTuA2HIeZchr9WOewD12zL325G6mlNdGlHwsbNBfoi98X_Ozc6sochFTqFvUc1WCUKy15Z2Z0wvw__pIqXvG033gOpawtNoIDimSH8xfDQJ5476joucU2KObAbltD-6jEBdp_gxKY_1A_rlD51y_SPeHXBi37ZLLAGKSPc_-fO2NXzT7iLjhKdVmnMyepDzFKjECLitfBOmRNbfU3mY7WDYcv7xULBx_QSaL_91lFG64E_kiLgMJVMT8l82YbE43nyDEb_nGZ_Tq8tXc8csn_tIW1q0l-ahJrqI3uYUHsXCnQsO902FmL3EEQTVgmWkjvtDU2t8C7A8M9QfQrsmX-hl9d6tENjWuSeYYOV5ZqBbdXajj5IrWVt6a-m0rZV8wed7qRYcGng2UQrNqGqOSH8N0Fz4EvQCQGqbUB6V_lQ_FfI91VGKEkn_XMo16d4cj6V8nrXHJmc4sCnlRs_ruSzddKYQotBXwpRTTXG6nLM8oySNxHvsOD2-29MIa3Cwi6bwpYqAyyVAWXX5PBSM0DYye2v4aTi2la9qe1-RgZZhXj4ctIwl-0J7ZPTbkSCvh4F4xP6QmUV8riZ-IcucH3CCbFRlC2D4SesISI=w724-h905-no?authuser=0" description="Kratos">&lt;/ap-photo&gt;
 
&lt;ap-photo url="https://lh3.googleusercontent.com/pw/AM-JKLW36oak0r29i4k5JLmitdzS_bkRuXVH3CaTTey875WVvmpjZC34YOfaOGlT6rYN0Y1vKqssPZhKA9AN32rConBqcKFdjRXTvpLThV-7kk2N2vvIjas8wBH4oKFX5mCae6qm-DiMbOTEnc2IzFFqIt4=w724-h905-no?authuser=0" description="Atreus"&gt;&lt;/ap-photo&gt;

</code>

No caso estamos mandando os parâmetros do template para as variáveis receberem.
</li>

<li><p>Para que funcione vamos no arquivo <em>photo.component.ts</em> e dentro da classe removemos os valores e deixamos só com as aspas</p></li>

<li><p>No inicio de cada propriedade adicionamos o decorator <code>@Input()</code> para que os mesmos recebam o valor diretamente do <em>app.component.html</em> os chamam. No caso ficarão assim:

<code>
export class PhotoComponent{
   @Input() description = ""
   @Input() url = "";
}
</code>
</p></li>
Quando tiver digitando o <code>@Input</code> ele irá sugerir para importar então importe ele irá adicionar o <code>Input</code> a seguinte linha aos imports

<code>import { Component, Input } from "@angular/core";</code>

<h2>Organizando nosso código em módulos</h2>

<p>Dentro de App vamos criar a pasta photos e jogar a pasta photo lá dentro
Vamos removê-lo de dentro do <em>app.component.ts</em> (de dentro das <em>declarations</em> e do <em>import</em>).
Dentro de photos criamos o arquivo photos.module.ts </p>

No <em>photos.module.ts</em> criamos uma classe exportável:
</br><code>export class PhotosModule {

}</code>


E acima dela chamamos o decorator <code>@NgModule</code> atribuindo o <em>PhotoComponent</em> nas suas <em>declarations</em> e dentro dos <em>exports</em> informamos que a mesma poderá ser importada por outro módulo.

ficará assim:

<code>@NgModule({
    declarations: [
        PhotoComponent
    ],
    exports: [
        PhotoComponent
    ]
})</code>


Enquanto digita <code>@NgModule</code> vai ser solicitado a importação do módulo se não for insira na lista de imports a seguinte linha:

<code>import { NgModule } from '@angular/core';</code>


E também será solicitado a importação do PhotoComponent então importe automaticamente ou insira 

<code>import { PhotoComponent } from './photo/photo.component';</code>


O <em>photos.module.ts</em> ficará assim:

<code>import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
 
 
@NgModule({
    declarations: [
        PhotoComponent
    ],
    exports: [
        PhotoComponent
    ]
})
 
export class PhotosModule {
 
}</code>


Em <em>app.module.ts</em> inserimos o <em>PhotosModule</em> nos <em>imports</em>  e importamos sua classe 

<code>import { PhotosModule } from './photos/photos.module';</code>


