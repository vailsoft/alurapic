<h1>Curso Angular Alura</h1>

<h2>Projeto alurapic</h2

<ul>
    <li>
        ng new alurapic - Inicia uma nova aplicação angular chamada alurapic
    </li>
    <li>
        ng serve -o - Inicia a aplicação no browser local
    </li>
    <li>
        ng serve --host ip - Inicia a aplicação podendo ser acessada por outro dispositivo remoto
    </li>
</ul>

<h2>Data Binding (ou interpolação)</h2>
<ul>
    <li>
        Nos permite indicar por meio de variáveis que guardarão valores no <em>app.component.ts</em> para que possamos recuperá-los pelo <em>app.component.html</em> (Template) utilizando {{ }} - (Double Curly Braces).
        <pre>{{ title }}</pre> (Aqui exibimos o título da aplicação que é uma variável definida dentro do <em>app.component.ts</em>).
        Um data binding em um atributo ele é envolvido entre colchetes.
        <pre>&lt;img [src] = “url” [alt] = “description”&gt;</pre>
        <span style="color: yellow;">Obs. One way data binding - quando o dado sai da fonte de dados mas não faz o caminho inverso</span>
    </li>
</ul>

<h2>Instalando Bootstrap</h2>
<ul>
    <li>
        verifique se está na pasta do projeto, se sim, Rode o comando no terminal: 
        <pre>npm install bootstrap</pre>
        <li>Depois vamos no arquivo <em>angular.json</em> vai ter uma propriedade <em>styles</em> que está dentro de <em>options</em> que por sua vez estará dentro de <em>build</em>, lá vai estar apontando para o <em>style.css</em> adicione uma virgula e cole o seguinte endereço:
        <pre>"./node_modules/bootstrap/dist/css/bootstrap.min.css"</pre>
    </li>
</ul>
<h2>Criando Componentes</h2>

<ul>
    <li>
        Dentro de <em>app</em> criamos a pasta <em>photo</em> e dentro dela criamos 3 arquivos, (<em>photo.component.ts</em>,<em>photo.component.html</em> e <em>photo.component.css</em>).
    </li>
    <li>
        No <em>photo.component.ts</em> vamos fazer o seguinte:
        Criar a classe <em>PhotoComponent</em> adicionando export para que a mesma possa ser importada em outro módulo inserindo no arquivo a as seguintes linhas; 
        <pre>export class PhotoComponent {
        }
        </pre>
    </li>
    <li>
        Para indicar que o PhotoComponent é um componente  deve ser adicionado acima da classe um decorator <em>@Component</em> com as propriedades 
        <pre>
            seletor: 'ap-photo', 
            templateUrl: 'photo.component.html',
            styleUrls: ['./photo.component.css']
        </pre> acima da criação da classe. O mesmo deverá ficar assim: 
<pre>
@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['./photo.component.css']
})</li></pre>
  
Enquanto digita o decorator <em>@Component</em> se estiver usando o Visual Studio com as extensões de autocomplete do angular ele irá lhe sugerir para importá-lo automaticamente, mas se não sugerir na primeira linha insira a seguinte informação:

<pre>import { Component } from "@angular/core"; </pre>

<li>Dentro da classe vamos inserir 2 propriedades

<pre>description = ""; 
    url = “";
</pre>
</li>

No final o <em>photo.component.ts</em> ficará assim:

<pre>import { Component } from "@angular/core";  

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
 
export class PhotoComponent {
    description = ""; 
    url = “"; 
}
</pre>

<li>
    Agora no photo.component.html insira a seguinte linha: 
    <pre>&lt;img class="img-thumbnail" [src]="url" [alt]="description"&gt;</pre>
</li>

<li><p>Para que o nosso componente seja utilizado abrimos o <em>app.component.html</em> que até agora é o único componente existente e adicionamos o nome do seletor como uma tag no caso:</p>

<pre>&lt;ap-photo&gt;&lt;/ap-photo&gt; </pre>

</li>
<li><p>Para que o <em>app.module.ts</em> reconheça o novo componente abrimos o <em>app.module.ts</em> e dentro das <em>declarations</em> vai estar somente o <em>AppComponent</em>, adicionamos uma vírgula e colocamos o nome do nosso novo componente no caso <em>PhotoComponent</em> que antes de terminar irá ser sugerido para que o mesmo seja importado se não for sugerido insira entre os imports a seguinte linha:</p>

<pre>import { PhotoComponent } from './photo/photo.component'; </pre>

<li><p>Agora vamos no <em>app.component.html</em> e vamos adicionar uma nova tag <pre>&lt;ap-photo&gt;&lt/ap-photo&gt; </pre> e aplicar as seguintes propriedades (<em>url e description</em>) irá ficar assim:

<pre>&lt;ap-photo 
  url="imagem.jpg" 
  description="Descrição da Imagem"></br>&lt;/ap-photo&gt; 
 </pre>

No caso estamos mandando os parâmetros do template para as variáveis receberem.
</li>

<li><p>Para que funcione vamos no arquivo <em>photo.component.ts</em> e dentro da classe removemos os valores e deixamos só com as aspas.</p></li>

<li><p>No inicio de cada propriedade adicionamos o decorator <em>@Input()</em> para que os mesmos recebam o valor diretamente do <em>app.component.html</em> ( Template ) que os chama. No caso ficarão assim:


<pre>export class PhotoComponent{
   @Input() description = ""
   @Input() url = ""; 
}
</pre>


</p></li>
<p>Quando tiver digitando o <em>@Input</em> ele irá sugerir para importar então importe ele irá adicionar o <em>Input</em> a seguinte linha aos imports:</p>


<pre>import { Component, Input } from "@angular/core"; </pre>
</ul>
<h2>Organizando nosso código em módulos</h2>
<ul>
    <li>
        Dentro de App vamos criar a pasta photos e jogar a pasta photo lá dentro.
        Vamos remover o PhotoComponent de dentro do <em>app.module.ts</em> (de dentro das <em>declarations</em> e do <em>import</em>).
    </li>
    <li>
        Dentro de photos criamos o arquivo photos.module.ts 
    </li>
    <li>
        No <em>photos.module.ts</em> criamos uma classe exportável:
    </li>
</br><pre>export class PhotosModule {

}</pre>

<li>
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
</li>
<li>Enquanto digita <em>@NgModule</em> vai ser solicitado a importação do módulo se não for insira na lista de imports a seguinte linha:

<pre>
import { NgModule } from '@angular/core'; 
</pre>
</li>
<li>
    E também será solicitado a importação do PhotoComponent então importe automaticamente ou insira a linha:
    <pre>import { PhotoComponent } from './photo/photo.component'; 
    </pre>
</li>
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
<li>
    Em <em>app.module.ts</em> inserimos o <em>PhotosModule</em> nos <em>imports</em>  e importamos sua classe:
    <pre>import { PhotosModule } from './photos/photos.module';</pre>
</li>
<li>
    Vamos criar um array de photos cada um com sua descrição e url própria.
</li>
<li>vamos no arquivo <em>app.component.ts</em> e dentro da class <em>AppComponent</em> criamos o seguinte array de photos:

<pre>
photos = [
    {
        url: "imagem.jpg",
        description: "Descrição Imagem"
    },
    {
        url: "imagem.jpg",
        description: "Descrição Imagem"
    },    {
        url: "imagem.jpg",
        description: "Descrição Imagem"
    }
];
</pre>
</ul>
<h2>ngFor - Utilizando diretivas</h2>
<ul>
<li>
    Dentro do <em>app.component.html</em>, vamos deixar somente um &lt;ap-photo&gt; e inserir um *ngFor para que a cada photo do array de photos sejam buscadas as informaçoes necessárias para que cada item seja renderizado.
    <pre>
    &lt;ap-photo *ngFor="let photo of photos" 
        [url]="photo.url" 
        [description]="photo.description"&gt;
    &lt;/ap-photo&gt;
</pre>
</ul>
<h2>Integrando a nossa aplicação com uma API</h2>
<ul>
    <li>
        Primeiramente baixamos o <a href="https://s3.amazonaws.com/caelum-online-public/865-angular/api.zip">arquivo.zip</a> que vamos utilizar pra fazer o procedimento.
    </li>
    <li>
        Extraimos o arquivo de modo que a pasta <em>api</em> não tenha outra pasta api dentro.
    </li>
    <li>
        Vamos no arquivo <em>package.json</em> e deletamos a dependência <em>sqlite</em>
    </li>
    <li>
        Acessamos a pasta via terminal e rodamos o comando <pre>npm install</pre> para instalar as dependências necessárias para prosseguir.
    </li>
    <li>
        Ao terminar rodamos o comando <pre>npm install sqlite3</pre> para instalar a versão mais recente.
    </li>
    <li>
        Ao fazer os procedimentos descritos acima poderá acessar rodar o comando <pre>npm start</pre> para iniciar a API. A mesma poderá ser acessada pelo endereço: <a href="http://localhost:3000/flavio/photos">http://localhost:3000/flavio/photos</a> no navegador.
    </li>
</ul>
    

<h2>Http Client e Injeção de dependências</h2>
<ul>
    <li>
        Vamos no arquivo <em>app.component.ts</em> e deixamos o array de photos vazio assim:
        <pre>photos = [];</pre>
    </li>
    <li>
        Vamos no arquivo app.module.ts e inserimos HttpClientModule nos imports e o mesmo será importado de: 
        <pre>import { HttpClientModule } from '@angular/common/http';</pre>
    </li>
</ul>
    <h2>Trabalhando com Services</h2>
<ul>
    <li>
        Agora vamos criar um serviço, abra o terminal e digite o comando: </p>
        <pre>ng g s services/photo</pre>
        Será criado uma pasta services contendo 2 arquivos <em>photo.service.ts</em> e <em>photo.service.spec.ts</em> mas vamos focar no primeiro citado.
    </li>
    <li>
        Dentro da classe <em>PhotoService</em> deverá conter um <em>constructor</em>, em seus parâmetros crie um private http do tipo HttpClient assim: 
        <pre>constructor(private http: HttpClient) {}</pre>
        <p style="color: #ffff00">Obs: Em Typescript o tipo é definido utilizando "nomeVariavel: Tipo"</p>
        </li>
        Verifique se o <pre>import { HttpClient } from '@angular/common/http';</pre> está entre os imports.
    </li>
    <li>
        Vamos inserir também uma função que chamaremos de listFromUser que conterá o parâmetro userName do tipo string que indicará de qual usuario as imagens serão carregadas.
    </li>
    <li>
        Dentro da função vamos escrever:
        <pre>return this.http.get(`${API}${userName}/photos`);</pre>
    </li>
    <li>
        Abaixo os imports criamos   uma constante com o endereço de nossa API:
        <pre>const API = 'http://localhost:3000/';</pre> 
    </li>
    <li>
        Verifique se o service tem o decorator: 
        <pre>@Injectable({ providedIn: 'root' })</pre>
        O mesmo é necessário para deixar o serviço disponível para todos os arquivos do projeto.
        Verifique se o 
        <pre>import { Injectable } from '@angular/core';</pre> está entre os imports.
    </li>
</ul>
<ul>

O photo.service.ts ficar assim: </p>
<pre>
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })

export class PhotoService {

    constructor(private http: HttpClient) {

    }

    listFromUser(userName: string){
        return this.http.get(`${API}${userName}/photos`);
    }  
}
</pre>
</p>

<li>No <em>app.component.ts</em> dentro da classe vamos criar 3 Variáveis: 
<pre>photos: any;
erro: any;
user: string = 'flavio'
</pre>

</li>
<li> Abaixo das variáveis criamos um <em>constructor</em> que vai utilizar um parâmetro do tipo <em>PhotoService</em> que será inserido nos imports:
<pre>import { PhotoService } from './services/photo.service';</pre> e inserimos a função getter para que seja chamada no caso:

<pre>constructor(private photoService: PhotoService){
    this.getter();
}</pre>
</li>

<li>Criamos também uma função <em>getter()</em>, a mesma será assim:
<pre>public getter(){
    this.photoService.listFromUser(this.user).subscribe(
        (data: any): void => {
            this.photos = data;
        }, (error: any) =>{
            this.erro = error;
            console.log(this.erro)
        });
    }</pre>


<li>abaixo do construtor se não tiver a função <em>ngOnInit</em> chamamos ela e a mesma vai importar de <em>@angular/core</em> o import ficará assim: 
<pre>import { Component, OnInit } from '@angular/core';</pre>

<p>O app.component.ts ficará assim:</p>

<pre>
import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  photos: any;
  erro: any;
  user: string = 'flavio';

  constructor(private photoService: PhotoService){
    this.getter();
  }

  ngOnInit(){}
  
  public getter(){
    this.photoService.listFromUser(this.user).subscribe(
      (data: any): void => {
        this.photos = data;
      }, (error: any) =>{
        this.erro = error;
        console.log(this.erro)
    });
  }

}
</pre>


</li>

<li>Para realizar um teste sem mostrar erros vamos comentar todo o &lt;ap-photo&gt; dentro de <em>app.component.html e colocamos um <em>ngFor</em>

<div *ngFor="let i of photos">
    <img [attr.src]="i.url" class="img-thumbnail"> 
 </div>

 Se aparecer as imagens deu tudo certo.


