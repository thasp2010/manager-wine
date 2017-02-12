$('#confirmaExclusaoModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget);
	  var nome = button.data('nome');
	  var url = button.data('url-delete');
	  
	  var modal = $(this);
	  var form = modal.find('form');
	  form.attr('action',url);
	  modal.find('.modal-body span').html('Tem certeza que deseja excluir o vinho <strong>'+nome+'</strong> ? ');
})
