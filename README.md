<h1>Curso Angular Alura</h1>

<h2>Projeto alurapic</h2

<ul>
  <li>ng new alurapic - Inicia uma nova aplicação angular chamada alurapic</li>
  <li>ng serve -o - Inicia a aplicação no browser local</li>
  <li>ng serve --host ip - Inicia a aplicação podendo ser acessada por outro dispositivo remoto</li>
</ul>

<h2>Data Binding (ou interpolação)</h2>

Nos permite indicar por meio de variáveis que guardarão valores no <em>app.component.ts</em> para que possamos recuperá-los pelo <em>app.component.html</em> (Template) utilizando

<pre>{{ title }}</pre> - double curly braces (Aqui exibimos o título da aplicação que é uma variável definida dentro do <em>app.component.ts</em>).

Um data binding em um atributo ele é envolvido entre colchetes
<code><pre><img [src]= “url” [alt]= “description”></pre></code>

Obs. One way data binding - quando o dado sai da fonte de dados mas não faz o caminho inverso

<h2>Instalando Bootstrap</h2>

verifique se está na pasta do projeto, se sim, Rode o comando no terminal: 

<pre>npm install bootstrap</pre>

Depois vamos no arquivo <em>angular.json</em> vai ter uma propriedade <em>styles</em> que está dentro de <em>options</em> que por sua vez estará dentro de <em>build</em>, lá vai estar apontando para o <em>style.css</em> adicione uma virgula e cole o seguinte endereço:

<pre>"./node_modules/bootstrap/dist/css/bootstrap.min.css"</pre>

<h2>Criando Componentes</h2>

Vamos criar um componente

<p>Dentro de <em>app</em> criamos a pasta <em>photo</em> e dentro dela criamos 2 arquivos, (<em>photo.component.ts</em> e <em>photo.component.html</em>).
</p>

No <em>photo.component.ts</em> vamos fazer o seguinte:
<ul>
<li>Criar a classe <em>PhotoComponent</em> adicionando export para que a mesma possa ser importada em outro módulo inserindo no arquivo a as seguintes linhas; 

<pre>
export class PhotoComponent {

}
</pre></li>

<li><p>Para indicar que o PhotoComponent é um componente  deve ser adicionado um decorator <em>@Component</em> com as propriedades 
<pre>
seletor: 'ap-photo', 
templateUrl: 'photo.component.html'</pre> acima da criação da classe.</p>
  
  O mesmo deverá ficar assim: 

<pre>
@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})</li></pre>
  
enquanto digita o decorator <em>@Component</em> se estiver usando o Visual Studio com as extensões de autocomplete do angular ele irá lhe sugerir para importá-lo automaticamente, mas se não sugerir na primeira linha insira a seguinte informação:

<pre>import { Component } from "@angular/core"; </pre>

<li>Dentro da classe vamos inserir 2 propriedades

<pre>
description = "Descrição da Imagem"; 
url = “image.jpg"; 
</pre>
</li>

No final o <em>photo.component.ts</em> ficará assim:

<pre>import { Component } from "@angular/core";  

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
 
export class PhotoComponent {
    description = "Descrição da Imagem"; 
    url = “image.jpg"; 
}
</pre>

<li><p>Para que o nosso componente seja utilizado abrimos o <em>app.module.html</em> que até agora é o único módulo existente e adicionamos o nome do seletor como uma tag no caso:</p>

<pre>&lt;ap-photo&gt;&lt;/ap-photo&gt; </pre>

</li>
<li><p>Para que o <em>app.module.ts</em> reconheça o novo componente abrimos o <em>app.module.ts</em> e dentro das <em>declarations</em> vai estar somente o <em>AppComponent</em>, adicionamos uma vírgula e colocamos o nome do nosso novo componente no caso <em>PhotoComponent</em> que antes de terminar irá ser sugerido para que o mesmo seja importado se não for sugerido insira entre os imports a seguinte linha</p>

<pre>import { PhotoComponent } from './photo/photo.component'; </pre>

<li><p>Agora vamos no <em>app.component.html</em> e vamos adicionar uma nova tag <pre>&lt;ap-photo&gt;&lt/ap-photo&gt; </pre> e aplicar as seguintes propriedades (<em>url e description</em>) irá ficar assim:

<pre>&lt;ap-photo 
  url="imagem.jpg" 
  description="Descrição da Imagem"></br>&lt;/ap-photo&gt; 
 </pre>

No caso estamos mandando os parâmetros do template para as variáveis receberem.
</li>

<li><p>Para que funcione vamos no arquivo <em>photo.component.ts</em> e dentro da classe removemos os valores e deixamos só com as aspas</p></li>

<li><p>No inicio de cada propriedade adicionamos o decorator <em>@Input()</em> para que os mesmos recebam o valor diretamente do <em>app.component.html</em> ( Template ) que os chama. No caso ficarão assim:


<pre>export class PhotoComponent{
   @Input() description = ""
   @Input() url = ""; 
}
</pre>


</p></li>
<p>Quando tiver digitando o <em>@Input</em> ele irá sugerir para importar então importe ele irá adicionar o <em>Input</em> a seguinte linha aos imports:</p>


<pre>import { Component, Input } from "@angular/core"; </pre>

<h2>Organizando nosso código em módulos</h2>

<p>Dentro de App vamos criar a pasta photos e jogar a pasta photo lá dentro
Vamos removê-lo de dentro do <em>app.component.ts</em> (de dentro das <em>declarations</em> e do <em>import</em>).
Dentro de photos criamos o arquivo photos.module.ts </p>

No <em>photos.module.ts</em> criamos uma classe exportável:
</br><pre>export class PhotosModule {

}</pre>

E acima dela chamamos o decorator <em>@NgModule</em> atribuindo o <em>PhotoComponent</em> nas suas <em>declarations</em> e dentro dos <em>exports</em> informamos que a mesma poderá ser importada por outro módulo.

ficará assim:

<pre>
@NgModule({
  declarations: [
      PhotoComponent
  ],
  exports: [
      PhotoComponent
  ]
})
</pre>
Enquanto digita <em>@NgModule</em> vai ser solicitado a importação do módulo se não for insira na lista de imports a seguinte linha:

<pre>
import { NgModule } from '@angular/core'; 
</pre>

E também será solicitado a importação do PhotoComponent então importe automaticamente ou insira a linha:

<pre>
import { PhotoComponent } from './photo/photo.component'; 
</pre>

O <em>photos.module.ts</em> ficará assim:

<pre>
import { NgModule } from '@angular/core'; 
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
 
}
</pre>
Em <em>app.module.ts</em> inserimos o <em>PhotosModule</em> nos <em>imports</em>  e importamos sua classe:

<pre>import { PhotosModule } from './photos/photos.module'; </pre>
