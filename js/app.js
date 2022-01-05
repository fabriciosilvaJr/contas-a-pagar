angular.module("AppCAP", ["ngMessages"]);
		angular.module("AppCAP").controller("AppCAPCtrl", function ($scope) {
			$scope.sistema = "Contas a Pagar";
			$scope.despesas = [
				{emissao: new Date('2017-10-25'), descricao: 'Energia Elétrica', valor: 200.00, vencimento: new Date('2017-11-25'), status_cor: 'green'},
				{emissao: new Date('2017-10-03'), descricao: 'Aluguel', valor: 450.90, vencimento: new Date('2017-10-10'), status_cor: 'yellow'},
				{emissao: new Date('2017-10-05'), descricao: 'Impostos', valor: 1764.98, vencimento: new Date('2017-10-20'), status_cor: 'green'},
				{emissao: new Date('2017-10-07'), descricao: 'Contador', valor: 370.00, vencimento: new Date('2017-10-15'), status_cor: 'red'},
				{emissao: new Date('2017-10-10'), descricao: 'Serviços Digitais', valor: 878.54, vencimento: new Date('2017-11-10'), status_cor: 'yellow'},
				{emissao: new Date('2017-10-05'), descricao: 'Plano de Saúde', valor: 1200.00, vencimento: new Date('2017-10-23'), status_cor: 'gray'},
			];


			$scope.categorias = [
				{nome: 'Despesas Operacionais', codigo: 1, grupo:'Despesas'},
				{nome: 'Despesas Financeiras', codigo: 2, grupo:'Despesas'},
				{nome: 'Custo do Serviço Prestado', codigo: 3, grupo:'Custos'},
				{nome: 'Despesas com Pessoal', codigo: 4, grupo:'Despesas'},
			];
			
			$scope.adicionarDespesa = function (despesa) {
				$scope.despesas.push(angular.copy(despesa));

				delete $scope.despesa;

				$scope.FormDespesa.$setPristine();
			};

			$scope.temMarcada = function (despesas) {
				return despesas.some(function (despesa) {
					return despesa.deletar;
				});
			}

			$scope.deletarDespesa = function (despesas) {
				$scope.despesas = despesas.filter(function (despesa) {
					if (!despesa.deletar) return despesa;
				});
			}
		});